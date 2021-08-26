import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card:{
    borderRadius:'10px',

  },
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height:"65px"
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));