import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="page-body">
            <div className="lock-screen">
                <h1>Screen Locked</h1>
                <p>Please enter your password to unlock.</p>
                <form>
                    <input type="password" placeholder="Password" />
                    <button type="submit">Unlock</button>
                </form>
                <Link href="/dashboard">Back to Dashboard</Link>
            </div>
        </div>
    )
}

export default page