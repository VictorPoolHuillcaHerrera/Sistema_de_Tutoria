import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaThLarge, FaFileInvoice, FaAddressBook,FaList} from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
  image:
  {
    padding: '1px',
    marginBottom: '-10px',
    alignContent: 'center',
    display:'flex',
    justifyContent:'center',
    height:'100px',
  },
  img:
  {
    padding:'0px',
    maxWidth: '100%',
    maxHeight:'100%',
  },
  texto:{
    padding: '3px 24px 24px 24px',
    wordWrap: 'normal',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: '1px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  } 
}));
const Aside = ({logo,collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const classes = useStyles();
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="xs"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className={classes.image} >
          <img className={classes.img} src="https://i.ibb.co/LPDw5CL/logo2.png" alt="logo2" border="0" />
        </div>
        <div
        className={classes.texto}>
          {intl.formatMessage({ id: 'Escuela Profesional de Ingeniería Informática y de Sistemas' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaThLarge />}
          >
            {intl.formatMessage({ id: 'Dashboard' })}
          </MenuItem>
          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'Horario de tutoria' })}</MenuItem>

          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'Docentes tutores' })}</MenuItem>

          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'Ayudantes de tutoria' })}</MenuItem>

          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'Estudiantes con riesgo academico' })}</MenuItem>

          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'Consultar informes de tutoria' })}</MenuItem>
          
      </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
        <span> {intl.formatMessage({ id: 'Cerrar Sesión' })}</span>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;