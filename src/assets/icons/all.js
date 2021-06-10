import Facebook from './facebook';
import LinkedIn from './linkedin';
import Mail from './mail';
import Twitter from './twitter';

const all = (props) => (
  // im assuming this is to hold all 4 icons? feel free to delete if im wrong
  <div>
    <Facebook />
    <LinkedIn />
    <Twitter />
    <Mail />
  </div>
);

export default all;
