import { Box, Divider, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import Header from "./Header";
import Footer from "./Footer";

const LayoutPageCommon = ({ breadcrumbData, title, actions, children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      gap: '12px',
    }}>
      <Box sx={{
        padding: '32px 44px',
        backgroundColor: '#fff',
        minHeight: 'calc(100vh - 74px)',
        display: 'flex',
        flexDirection: 'column',
        // width:"calc(100vw - 74px)"
      }}>
        {/* Breadcrumb */}
        {breadcrumbData && breadcrumbData.length > 0 && (
          <Box mb="8px" display="flex" alignItems="center">
            {breadcrumbData.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={item.href}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: index === breadcrumbData.length - 1 ? '#000000E0' : '#00000073' }}
                  >
                    {item.name}
                  </Typography>
                </Link>
                {index < breadcrumbData.length - 1 && (
                  <Typography variant="body2" sx={{ mx: 0.5, color: '#00000073' }}>
                    /
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        )}

        {/* Title and Actions */}
        <Header title={title}>
          {actions}
        </Header>

        {/* Content */}
        {children}

      </Box>
      <Box>
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
};

LayoutPageCommon.propTypes = {
  breadcrumbData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
  actions: PropTypes.node,
  children: PropTypes.node,
};

export default LayoutPageCommon;