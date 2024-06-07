import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify'

const DeleteModal = ({ open, setOpen, delProduct, deleteId, setDeleteId }) => {
    const router = useRouter();

    const handleDelete = async () => {
        if (deleteId) {
            const formData = new FormData();
            formData.append("id", deleteId);
            const response = await delProduct(formData);
            setOpen(false);
            setDeleteId(null);

            if (response.status === 202) {
                toast.success(response.message);
                router.push(response.redirectTo);
            } else {
                toast.error(response.message);
            }
        }
    };

    return (
        <>
            {open && (
                <>
                    <div className={`delete-modal modal fade show`} style={{ display: 'block' }}>
                        <div className="modal-dialog modal-confirm">
                            <div className="modal-content">
                                <div className="modal-header flex-column">
                                    <div className="icon-box">
                                        <img src="/assets/images/close.png" alt="" className="img-fluid" />
                                    </div>
                                    <h4 className="modal-title w-100">Are you sure?</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Do you really want to delete this product? This process cannot be undone.</p>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button type="button" className="btn btn-secondary" onClick={() => setOpen(false)}>Cancel</button>
                                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}
        </>
    )
}

export default DeleteModal
