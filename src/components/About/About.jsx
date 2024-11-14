import React from 'react';

export default function About(props) {
    const { name, age, id, onSale } = props.productData;
    const { deleteP } = props;

    return (
        <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow-lg relative">
            <img
                src="https://via.placeholder.com/150"
                alt={name}
                className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
                <h1 className="text-lg font-semibold text-gray-800">{name}</h1>
                <p className="text-gray-600">Age: {age}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    View Details
                </button>
                <button
                    onClick={() => deleteP(id)}
                    className="bg-red-600 text-white px-4 py-2 m-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Delete
                </button>
                {onSale && (
                    <div className="bg-yellow-300 text-gray-800 absolute top-0 right-0 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold">Sale</span>
                    </div>
                )}
            </div>
        </div>
    );
}
