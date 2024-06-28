'use client'
import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link" href="#" onClick={handlePrevious}>
                        <span><i className="fa fa-chevron-left"></i></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                </li>
                {pages.map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                        <Link className="page-link" href="#" onClick={() => handlePageClick(page)}>
                            {page}
                        </Link>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link className="page-link" href="#" onClick={handleNext}>
                        <span><i className="fa fa-chevron-right"></i></span>
                        <span className="sr-only">Next</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
