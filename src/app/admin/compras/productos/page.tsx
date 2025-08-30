'use client';
import CreateModal from '@/components/admin/compras/products/CreateModal';
import DetailsModal from '@/components/admin/compras/products/DetailsModal';
import { ProductProps } from '@/types/types';
import React, { useState } from 'react';

function page() {
    const [createModal, setCreateModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [product, setProduct] = useState<ProductProps>();
    const [products, setProducts] = useState<ProductProps[]>([
        {
            id: 'aslkdjladks',
            product: 'aslkdalkjs',
            description: 'asldalks',
            category: {
                id: 'salkdklsa',
                category: 'ASlkdalksd',
                desctiption: 'aslkdjakls',
                status: true,
                imageUrl: "aslkdsjka"
            },
            status: true,
            imageUrl: 'alskdjkladjs',
        },
    ]);
    return (
        <div className='w-full'>
            <header className='mt-10 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                <h1 className='text-3xl md:text-4xl font-semibold'>GESTION DE CATEGORIAS</h1>
                <div className='flex gap-4'>
                    <button
                        onClick={() => setCreateModal(true)}
                        className='border rounded-lg px-6 py-2 bg-primary text-white cursor-pointer'>
                        Nueva Categoria
                    </button>
                    <input
                        type='text'
                        placeholder='Buscar Categoria'
                        className='border rounded-xl px-4 py-2 w-full md:w-80'
                    />
                </div>
            </header>

            {/* Productos */}
            <section className='px-8 mt-40 2xl:mt-60'>
                <div className='grid grid-cols-4 place-items-center'>
                    <p>ID</p>
                    <p>Categoria</p>
                    <p>Categoria</p>
                    <p>Estado</p>
                </div>

                <div className='bg-gray-300 w-full h-120 2xl:h-140 px-4 py-4 rounded-lg'>
                    {products.map((product) => (
                        <div
                            onClick={() => {
                                setProduct(product);
                                setDetailsModal(true);
                            }}
                            key={product.id}
                            className='grid grid-cols-4 place-items-center py-2 rounded-lg bg-white cursor-pointer'>
                            <p>{product.id}</p>
                            <p>{product.product}</p>
                            <p>{product.status ? '🟢' : '🔴'}</p>
                            <p>{product.category.category}</p>
                        </div>
                    ))}
                </div>
            </section>
            <CreateModal
                isOpen={createModal}
                onClose={() => setCreateModal(false)}
            />
            <DetailsModal
                isOpen={detailsModal}
                onClose={() => setDetailsModal(false)}
                extraProps={product}
            />
        </div>
    );
}

export default page;
