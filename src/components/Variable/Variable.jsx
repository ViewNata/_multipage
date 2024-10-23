// import styles
import './Variable.css';

function Variable({ type, name, value, setValue }) {
    return (
        <div className='counter-name'>
            <h3 className='title'>{name || 'VARIABLE'}</h3>
            <div className="variable-controls">
                <button className='btn btn-danger' onClick={() => setValue(value - 1)}>-</button>
                <span className='counter-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
                <button className='btn btn-success' onClick={() => setValue(value + 1)}>+</button>
            </div>
        </div>
    );
}

export default Variable;
