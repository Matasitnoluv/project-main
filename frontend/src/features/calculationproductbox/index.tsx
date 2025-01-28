// src/components/CalculationForm.js
import React from 'react';
import { Table, Card, Button, } from "@radix-ui/themes";

const CalculationProductAndBoxPage = () => {
    return (
        <div className="bg-gray-100 p-36 rounded-lg shadow-md h-screen">
            <h2 className="text-2xl font-bold mb-2">Calculation Product & Box</h2>
           

            <h3 className="text-lg font-medium mb-2">
                <Button
                    className="bg-green-400 hover:bg-green-500 hover:cursor-pointer
                                       text-white font-bold py-2 px-4 rounded shadow-xl w-30 mt-10 ">Calculation</Button>
            </h3>
            
            <h2 className="text-2xl font-bold mb-2 mt-10">Calculation Zone & Warehouse</h2>
           

            <h3 className="text-lg font-medium mb-2">
                <Button
                    className="bg-green-400 hover:bg-green-500 hover:cursor-pointer
                                       text-white font-bold py-2 px-4 rounded shadow-xl w-30 mt-10">Calculation</Button>
            </h3>
        </div>
        
    );
};

export default CalculationProductAndBoxPage;