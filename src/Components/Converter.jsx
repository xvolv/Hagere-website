import { forwardRef } from 'react';


const Converter = forwardRef(function Converter(props, ref) {
  return (
    <div ref={ref} className="bg-slate-500   h-96 w-full sm:flex-col   items-center justify-around  ">
      <div className="bg-slate-400 mx-1"
      >
        <h1>Converte digital</h1>
        <select name="" id="">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
          <option value="five">five</option>
          <option value="six">six</option>
        </select>
        <input type="text" placeholder="value" />
        <select name="" id="">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
          <option value="five">five</option>
          <option value="six">six</option>
        </select>
      </div>
      <div className="bg-slate-600">tool  two</div>
    </div>
  );
});

export default Converter;
