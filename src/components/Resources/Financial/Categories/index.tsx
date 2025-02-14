import { CategoryInfo, CategoryItem, Group } from './styles'
import { useEffect, useState } from 'react'

import { ContainerMain } from '../../containerMain'
import { Input } from '../../../../components/_ui/Input/textInput'
import { TransactionFinancialType } from '../../../../generated/graphql'
import graphqlRequestClient from '../../../../lib/graphql.request'
import { useGetCategoriesQuery } from '../../../../generated/graphql'

type CategoryType = {
    __typename?: "Category" | undefined;
    id: string;
    name: string;
    type: TransactionFinancialType;
};

export const Categories = () => {


    const { data: categories } = useGetCategoriesQuery(graphqlRequestClient)

    // Estado para o termo de pesquisa
    const [searchTerm, setSearchTerm] = useState('');

    // Estado para as categorias filtradas
    const [filteredCategories, setFilteredCategories] = useState<CategoryType[]>([]);


    // Atualiza as categorias filtradas sempre que o termo de pesquisa mudar
    useEffect(() => {

        if (!categories || !categories.getCategories) return;
        
        if (searchTerm === '') {
            setFilteredCategories(categories?.getCategories || []);
        } else {
            const filtered = categories?.getCategories.filter(category =>
                category.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCategories(filtered);
        }

    }, [searchTerm, categories]);

    // Manipula a mudança no campo de pesquisa
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <ContainerMain title="Categories">
                <Group>
                    <Input
                        placeholder="Search"
                        name="search"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Group>
                {filteredCategories.map((category) => (
                    <CategoryItem key={category.id}>
                        <Group>
                            <CategoryInfo>

                                <p>{category.name}</p>
                            </CategoryInfo>
                            <CategoryInfo>
                                <span>{category.type}</span>
                            </CategoryInfo>

                        </Group>
                    </CategoryItem>
                ))
                }
            </ContainerMain>

        </>
    )
}