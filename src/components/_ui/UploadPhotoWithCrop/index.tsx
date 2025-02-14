import { useEffect, useState } from 'react';

import { BsCamera } from 'react-icons/bs';
import Image from 'next/image';
import { MdOutlineShoppingBasket } from 'react-icons/md';

interface UploadPhotoWithCropProps {
  imageUser?: string | null | undefined;
  setBanner?: (image: string) => void;
  imageHeight?: number;
  imageWidth?: number;
}

export const UploadPhotoWithCrop = ({
  imageUser,
  setBanner,
  imageWidth = 200,
  imageHeight = 200,
}: UploadPhotoWithCropProps) => {
  const [image, setImage] = useState('');

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };

    if (files.length) {
      reader.readAsDataURL(files[0]);
    }
  };

  useEffect(() => {
    if (image && setBanner) {
      setBanner(image);
    }
  }, [image, setBanner]);

  useEffect(() => {
    if (imageUser) {
      setImage(imageUser);
    }
  }, [imageUser]);

  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto bg-white p-6 rounded-lg shadow-md">
      <label
        htmlFor="file-upload"
        className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200"
      >
        {!image ? (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <MdOutlineShoppingBasket size={50} />
            <p className="mt-2 text-sm font-medium">Upload an Image</p>
            <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
              <BsCamera size={20} />
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={image}
              alt="Uploaded"
              width={imageWidth}
              height={imageHeight}
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
              <BsCamera size={20} className="text-gray-600" />
            </div>
          </div>
        )}
        <input
          id="file-upload"
          type="file"
          onChange={onChange}
          className="hidden"
        />
      </label>
    </div>
  );
};
