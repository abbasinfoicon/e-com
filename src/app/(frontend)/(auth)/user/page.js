import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'
import UserDetails from './UserDetails'
import { changeContent, changePassword, getUser } from '@/actions/userAction';

const User = async () => {
  const userData = await getUser();

  return (
    <>
      <Breadcrumb title="Dashboard" />

      <section className="dashboard-section section-b-space user-dashboard-section">
        <UserDetails userData={userData} changePassword={changePassword} changeContent={changeContent} />
      </section >
    </>
  )
}

export default User
