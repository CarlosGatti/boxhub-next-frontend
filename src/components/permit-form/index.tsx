import {
    PermitKind,
    PermitStatus,
    useAddPermitMutation,
} from '../../generated/graphql';

import axios from 'axios';
import {graphqlRequestClient} from '../../lib/graphql.request';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
// components/PermitForm.tsx
import { useState } from 'react';

type PermitFormProps = { projectId: number };

export const PermitForm = ({ projectId }: PermitFormProps) => {
    // 🔸 Campos do formulário
    const router = useRouter();
    const [form, setForm] = useState({
        number: '',
        kind: PermitKind.BUILDING,
        status: PermitStatus.REQUIRED,
        file: null as File | null,
    });


    const baseUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_FRONTEND_URL_LOCAL
      : process.env.NEXT_PUBLIC_FRONTEND_URL_PROD;


    const [uploading, setUploading] = useState(false);
    const { mutateAsync: addPermit } = useAddPermitMutation(graphqlRequestClient);

    /* ---------- handlers ---------- */
    const onField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value, files } = e.target as any;
        setForm(prev => ({
            ...prev,
            [name]: name === 'file' ? files?.[0] ?? null : value,
        }));
    };

    // faz upload REST → recebe url
    const uploadFile = async (file: File) => {
        const fd = new FormData();
        fd.append('file', file);
        const { data } = await axios.post<{ url: string }>(
            baseUrl + '/uploads/project-permits',
            fd,
            { headers: { 'Content-Type': 'multipart/form-data' } },
        );
        return data.url;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.file) return;

        setUploading(true);
        try {
            const fileUrl = await uploadFile(form.file);

            await addPermit({
                projectId,
                number: form.number,
                kind: form.kind,
                status: form.status,
                file: fileUrl,             // deve existir no resolver
            });

            alert('Permit added successfully!');

            router.push(`/projects/construction-log/${projectId}`);

            setForm({
                number: '',
                kind: '',
                status: '',
                file: null,
            });
        } catch (err) {
            console.error(err);
            alert('Could not add permit');
        } finally {
            setUploading(false);
        }
    };

    /* ---------- UI ---------- */
    return (

        <form
            onSubmit={onSubmit}
            className="space-y-3 border rounded-xl p-5 bg-white shadow"
        >
            <h3 className="text-lg font-semibold mb-2">New Permit / Inspection</h3>

            <input
                name="number"
                placeholder="Document / Permit #"
                value={form.number}
                onChange={onField}
                className="w-full border px-3 py-2 rounded"
                required
            />

            <select
                name="kind"
                value={form.kind}
                onChange={onField}
                className="w-full border px-3 py-2 rounded"
            >
                {Object.values(PermitKind).map(k => (
                    <option key={k}>{k}</option>
                ))}
            </select>

            <select
                name="status"
                value={form.status}
                onChange={onField}
                className="w-full border px-3 py-2 rounded"
            >
                {Object.values(PermitStatus).map(s => (
                    <option key={s}>{s}</option>
                ))}
            </select>

            <input
                name="file"
                type="file"
                accept="application/pdf,image/jpeg,image/png"
                onChange={onField}
                className="w-full border px-3 py-2 rounded bg-white"
                required
            />

            <button
                type="submit"
                disabled={uploading}
                className="bg-gray-600 text-white w-full py-2 rounded hover:bg-gray-700 disabled:opacity-50"
            >
                {uploading ? 'Uploading…' : 'Submit'}
            </button>
        </form>

    );
};
