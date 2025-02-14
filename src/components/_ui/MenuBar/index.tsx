import { AiOutlineStock, AiOutlineUser } from 'react-icons/ai'
import { ButtonHTMLAttributes, ReactElement } from 'react'
import { Container, Icon, MenuButton, Title, Topside } from './styles'
import { FaBoxOpen, FaRegListAlt } from "react-icons/fa";

import { BsFileBarGraph } from "react-icons/bs";
import { CgFeed } from 'react-icons/cg'
import { FaQrcode } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { HiOutlineUserGroup } from 'react-icons/hi'
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineHvac } from "react-icons/md";
import { PrivacyTerms } from '../../../components/_ui/SideBar/PrivacyTerms'

interface MenuBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  item: string
  onClick?: () => void
  link: string
  title?: string
}

const MenuBtn = ({ icon, item, link, onClick, title }: MenuBtnProps) => {
  return (
    <MenuButton href={link} onClick={onClick} title={title}>
      <Icon>{icon}</Icon>
      <span>{item}</span>
    </MenuButton>
  )
}

interface MenuBarProps {
  open?: boolean
}

export const MenuBar = ({ open = false }: MenuBarProps) => {
  return (
    <Container open={open}>
      <Topside>
        <Title>Menu</Title>
        <MenuBtn link="/qrcode-app/dashboard" icon={<BsFileBarGraph />} item="Dashboard" />
        <MenuBtn link="/qrcode-app/families" icon={<MdFamilyRestroom />} item="Familie" />
        
        <MenuBtn link="/qrcode-app/container/list" icon={<FaBoxOpen />} item="Container" />

        <MenuBtn link="/qrcode-app/items/list" icon={<FaRegListAlt />} item="Itens" />
        <MenuBtn link="/qrcode-app/scanner" icon={<FaQrcode />} item="Scanner" />
       
        {/*   <MenuBtn link="#" icon={<BsBookmark />} item="Salvos" />
        <MenuBtn link="#" icon={<TbConfetti />} item="Eventos" />
        <MenuBtn
          link="#"
          icon={<RiCalendarCheckLine />}
          item="Aniversariantes"
        />
        <MenuBtn link="#" icon={<BsBriefcase />} item="Vagas" />
        <MenuBtn link="#" icon={<IoMdPaper />} item="Atividades" />
        <MenuBtn link="#" icon={<IoTrophyOutline />} item="Recompensas" />
        <MenuBtn link="#" icon={<HiOutlineTag />} item="Meus pedidos" />

        <MenuButton href="/financial">
          <Icon>
            <BsFileEarmarkArrowUp />
          </Icon>
          <span>Financeiro</span>
          <MdKeyboardArrowDown className="icon-arrow" />
        </MenuButton>

        <MenuBtn
          link="#"
          icon={<RiFileCopy2Line />}
          item="Termos e políticas"
        />
        <MenuBtn link="#" icon={<BsGear />} item="Configurações" /> */}
      </Topside>

      <PrivacyTerms />
    </Container>
  )
}
/* export const MenuBar = memo(MenuBarComponent, (prevPprops, nextProp) => {
  return Object.is(prevPprops.open, nextProp.open)
}) */
