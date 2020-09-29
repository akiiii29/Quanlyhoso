import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import PropTypes from "prop-types";
import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import styles from "./styles";
import { Query } from "react-apollo";
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

class Quanlycongviec extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>

              const linksToRenders = data.sanPhams
              return (
                <React.Fragment>
                  {linksToRenders.map((sanPhams) => (
                    <Grid item xs={6} key={sanPhams.id} >
                      <Card className={classes.card}>
                        <Paper className={classes.paper}>
                          <MenuOutlinedIcon className={classes.icon} />
                        </Paper>
                        <CardHeader title="Kế Hoạch công việc" />
                        <CardContent className={classes.CardContent}>
                          <Typography
                            variant="h1"
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            Công việc : {sanPhams.TenSanPham}
                          </Typography>
                          <Typography
                            variant="h1"
                            className={classes.title1}
                            color="textSecondary"
                            gutterBottom
                          >
                            Người thực hiện : {sanPhams.TenSanPham}
                          </Typography>
                          <Typography
                            variant="h1"
                            className={classes.title2}
                            color="textSecondary"
                            gutterBottom
                          >
                            Thời Gian : {sanPhams.NgayNhap}
                          </Typography>
                          {`Mô tả công việc :`}
                          <LinesEllipsis
                            text={sanPhams.SoLuong}
                            maxLine="2"
                            trimRight
                            basedOn="letters"
                          ></LinesEllipsis>
                          <Button
                            className={classes.LinesEllipsis}

                          >
                            Xem Chi Tiết
                </Button>
                        </CardContent>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<AddIcon>send</AddIcon>}
                        >
                          Thêm
              </Button>
                      </Card>
                    </Grid>

                  )
                  )
                  }
                </React.Fragment>
              )
            }}
          </Query>
        </Grid>
      </div>
    );
  }
}

Quanlycongviec.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Quanlycongviec);
