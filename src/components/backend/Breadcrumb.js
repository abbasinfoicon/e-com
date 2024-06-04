import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ title, subtitle, parent }) => {
    return (
        <div className="container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="page-header-left">
                            <h3>{title} <small>{subtitle}</small></h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item"><Link href="/dashboard"><i className="fa fa-home"></i></Link></li>
                            {parent ? <li className="breadcrumb-item"><Link href={`/dashboard/${parent}`}>{parent}</Link></li> : null}
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb