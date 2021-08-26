import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    borderRadius:'10px',
    transition: '0.2s',
    '&:hover':{
      transform :'translateY(-0.5rem)'
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    height:'75px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardDescription:{
    height:'60px'
  }
}))