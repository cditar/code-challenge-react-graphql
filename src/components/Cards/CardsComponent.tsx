import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Avatar, Icon } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const styles = {
  cardStyle:  {
    backgroundColor: '#343847',
    color: 'white',
    border: '1px solid #505568',
    borderRadius: '20px',
    padding: '15px',
  },
  cardTitle: {
    fontSize: '21px',
    fontWeight: 600,
  }
}

interface CardComponentProps {
  emoji?: string;
  title?: string;
  phone?: string;
  currency: string;
  languages?: string[];
}

export const CardsComponent = ({ emoji, title, phone, currency, languages }: CardComponentProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 350, maxHeight: 180, minHeight: 180 }} style={styles.cardStyle}>
      <div>
        <Stack direction="row" justifyContent="start" alignItems="center">
          <Avatar sx={{ bgcolor: 'white', color: 'black', marginRight: '5px', paddingBottom: '5px', paddingLeft: '3px', paddingRight: '3px' }}> {emoji} </Avatar>
          <Stack direction='column'>
            <Typography gutterBottom component="div" style={styles.cardTitle}>
              {title}
            </Typography>
            <Stack direction='row'>
              <div style={{ display: 'flex', fontSize: 11, marginLeft: 5, marginRight: 5}}><Icon style={{ display: 'flex', width: '15px', height: '15px', marginBottom: 1, color: '#4A94CC' }}><LocationOnIcon style={{ width: '15px', height: '15px' }} /></Icon> City </div>
              <div style={{ display: 'flex', fontSize: 11, marginLeft: 5, marginRight: 5}}><Icon style={{ display: 'flex', width: '15px', height: '15px', marginBottom: 1, color: '#4A94CC' }}><LocationOnIcon style={{ width: '15px', height: '15px' }} /></Icon> --state </div>
              <div style={{ display: 'flex', fontSize: 11, marginLeft: 5, marginRight: 5 }}><Icon style={{ display: 'flex', width: '15px', height: '15px', marginBottom: 1, color: '#4A94CC' }}><LocationOnIcon style={{ width: '15px', height: '15px' }} /></Icon> ++---</div>

            </Stack>
          </Stack>
        </Stack>
      </div>
      <div>
        <Typography gutterBottom variant="body2" fontWeight={600} marginTop={2}>
          Currency
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label={currency} size="small" style={{ backgroundColor: '#2DCAB1' }} />
        </Stack>
      </div>
      <Divider style={{ marginTop: '10px', marginBottom: '2px', backgroundColor: '#535659' }} />
      <div>
        <Typography gutterBottom variant="body2" fontWeight={600}>
          Languajes
        </Typography>
        <Stack direction="row" spacing={1}>
          {
            languages?.map((item: any) =>
              <Chip color="primary" label={item.name} size="small" style={{ backgroundColor: '#4A94CC' }} />
            )
          }
        </Stack>
      </div>
    </Card>
  );
}