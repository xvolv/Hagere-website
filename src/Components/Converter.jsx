import { forwardRef } from 'react';


const Converter = forwardRef(function Converter(props, ref) {
  return (
    <div ref={ref} className="bg-slate-500   h-96 w-full flex items-center justify-around">
      <div className="bg-slate-400 mx-1"
      >tool  one</div>
      <div className="bg-slate-600">tool  two</div>
    </div>
  );
});

export default Converter;
