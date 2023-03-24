import { useState } from 'react';

import Layout from './components/Layout';
import SelectCodeStyle from './components/SelectCodeStyle';

const App = () => {
  const [codeStyle, setCodeStyle] = useState<string>('css');

  return (
    <Layout>
      <div>
        <h2 className="mb-2 font-semibold">Select your code style.</h2>
        <SelectCodeStyle name="code-style" value={codeStyle} onValueChange={setCodeStyle} />
      </div>
    </Layout>
  );
};

export default App;
