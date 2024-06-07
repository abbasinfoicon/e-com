'use client'
import DeleteModal from '@/components/backend/DeleteModal';
import React, { useState } from 'react'

const DeleteProduct = ({ delProduct, id }) => {
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    return (
        <>
            {/* <form action={delProduct}>
                <input type="hidden" name="id" value={String(id)} />
                <button className="btn btn-secondary" type="submit">Delete</button>
            </form> */}
            <button className="btn btn-primary" onClick={() => { setOpen(true); setDeleteId(id); }}>Delete</button>

            <DeleteModal open={open} setOpen={setOpen} delProduct={delProduct} deleteId={deleteId} setDeleteId={setDeleteId} />
        </>
    )
}

export default DeleteProduct