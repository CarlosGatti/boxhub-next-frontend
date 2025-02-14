import { Container, SideBarLeft, WrapperBody } from '../../styles/qrcode';
import { FaBoxOpen, FaChartLine, FaQrcode, FaTags } from "react-icons/fa";

// import Dashboard  from '../../components/qrcode/Dashboad';
import { Header } from '../../components/_ui/Header';
import { MainLayout } from '../../layouts/MainLayout';
// import  ManageContainers  from '../../components/qrcode/ManageContainers';
// import ManageFamilies from '../../components/qrcode/ManageFamilies';
// import  ManageItems  from '../../components/qrcode/ManageItems';
import { MdFamilyRestroom } from "react-icons/md";
import { MenuBtn } from '../../components/Resources/MenuButton';
import { NextPage } from 'next';
// import  QrCodeGenerator  from '../../components/qrcode/QrCodeGenerator';
// import  QrCodeScanner  from '../../components/qrcode/QrCodeScanner';
import { useState } from 'react';

const QrCodeApp: NextPage = () => {
  const [active, setActive] = useState('dashboard');

  const handleMenuClick = (newActive: string) => {
    setActive(newActive);
  };

  return (
    <MainLayout
      headTitle="QR Code App"
      metaContent="QR Code App for managing containers and items"
      metaName="description"
    >
      <Header />
      <Container>
        <SideBarLeft title="QR Code App" privacyLink>
          <MenuBtn
            item="Dashboard"
            icon={<FaChartLine />}
            className={active === 'dashboard' ? 'active' : 'disabled'}
            onClick={() => handleMenuClick('dashboard')}
          />

          <MenuBtn
            item="Scan QR Code"
            icon={<FaQrcode />}
            className={active === 'scanner' ? 'active' : 'disabled'}
            onClick={() => handleMenuClick('scanner')}
          />

          <MenuBtn
            item="Generate QR Code"
            icon={<FaQrcode />}
            className={active === 'generator' ? 'active' : 'disabled'}
            onClick={() => handleMenuClick('generator')}
          />

          <MenuBtn
            item="Manage Containers"
            icon={<FaBoxOpen />}
            className={active === 'containers' ? 'active' : 'disabled'}
            onClick={() => handleMenuClick('containers')}
          />

          <MenuBtn
            item="Manage Items"
            icon={<FaTags />}
            className={active === 'items' ? 'active' : 'disabled'}
            onClick={() => handleMenuClick('items')}
          />


        <MenuBtn
            item="Manage Families"
            icon={<MdFamilyRestroom />}
            className={active === 'families' ? 'active' : 'disabled'}
            onClick={() => handleMenuClick('families')}
          />

        </SideBarLeft>

    
{/* 
        <WrapperBody>
          {active === 'dashboard' && <Dashboard />}
          {active === 'scanner' && <QrCodeScanner />}
          {active === 'generator' && <QrCodeGenerator />}
          {active === 'containers' && <ManageContainers />}
          {active === 'items' && <ManageItems />}
            {active === 'families' && <ManageFamilies />}
        </WrapperBody> */}
      </Container>
    </MainLayout>
  );
};

export default QrCodeApp;
