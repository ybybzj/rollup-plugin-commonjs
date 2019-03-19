import './foo.js';
import 'commonjs-proxy:./foo.js';

import './bar.js';

var input = {};

export default input;
export { input as __moduleExports };
