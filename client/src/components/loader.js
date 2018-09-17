import React from 'react';

export default props => props.show ? <div><span className="glyphicon glyphicon-refresh"></span> Loading...</div> : null;
