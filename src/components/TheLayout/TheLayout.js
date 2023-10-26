import { Outlet } from "react-router-dom";

import TheHeader from '@/components/TheHeader/TheHeader';
import TheFooter from '@/components/TheFooter/TheFooter';

function TheLayout() {
  return (
    <>
      <TheHeader />
        <main>
          <Outlet />
        </main>
      <TheFooter />
    </>
  )
}

export default TheLayout;