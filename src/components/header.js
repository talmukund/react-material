import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
//import ListItemIcon from '@material-ui/core/ListItemIcon'
//import { Home} from '@material-ui/icons'

export default (props) => (
    <List component="nav">
        <ListItem component="div" >
            <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                    Nykaa Sample
                    </TypoGraphy>
            </ListItemText>
        </ListItem >
    </List>
)