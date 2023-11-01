import React from 'react'
import { Icon } from '@iconify/react';
import Card from '../Card/Card'

export default function BillBoard() {
  return (
    <div>
        <h2 className='cartelera text-2xl my-6 text-center'>CARTELERA</h2>
        <div className='flex justify-around bg-black p-4'>
            <input className='border border-black rounded-md w-3/6 h-8' type="text" placeholder='Buscar...'/>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-white text-lg'>Filtros</p>
                <Icon icon="bxs:down-arrow" color="white" />
            </div>
        </div>
        <Card/>
    </div>
  )
}

