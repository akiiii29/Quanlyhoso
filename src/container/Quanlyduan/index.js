import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
export const FEED_QUERY = gql`
    {
  sanPhams{
    id,
    TenSanPham,
    Gia,
    SoLuong,
    NgayNhap 
  }
}
  `
class Quanlyduan extends Component {
    render() {
       
        return (
            <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
  
        const linksToRender = data.sanPhams
  
        return (
          <div>
            {linksToRender.map((sanPhams, index) => (
              <div key={sanPhams.id} link={sanPhams} index={index}
               >
                
                <div>
            Tên sản phẩm : {sanPhams.TenSanPham} 
             ({sanPhams.id}) -
            Giá {sanPhams.Gia} -
            Số Lượng {sanPhams.SoLuong}
                </div>
          
          
                </div>
            ))}
          </div>
        )
      }}
    </Query>
        );
    }
}

Quanlyduan.propTypes = {

};

export default withStyles(styles)(Quanlyduan);