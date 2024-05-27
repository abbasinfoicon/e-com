import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ title, parent, parentLink }) => {
    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="page-title">
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <nav aria-label="breadcrumb" className="theme-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                {parent && <li className="breadcrumb-item"><Link href={`/${parentLink}`}>{parent}</Link></li>}
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb