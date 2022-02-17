import React,{useEffect, useState} from 'react';
import { Table  } from 'antd';
//import { mockData } from '../utils/mocks/dataTabble';
import moment from 'moment';
import { ButtonEdit } from './ButtonEdit';
import { ButtonDelete } from './ButtonDelete';
import {getTaxesTypesAccion,editTaxTypeAccion} from '../actions/taxTypeActions'
import {useDispatch,useSelector} from 'react-redux';
import { ModalEditAdd } from './ModalEditAdd';

export const DataTable = ({search,summitId }) => {
  //const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(false);
  const data =  useSelector(state => state.taxType);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [taxType, setTaxType] = useState({});

  const handlerModal = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const columns = [       
    {
      title: 'ID',
      dataIndex: 'id',
      defaultSortOrder: 'descend',
      width:1,
      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'Name',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.name.length - b.name.length
    },{
      title: 'CreatedDate ',
      dataIndex: 'created',
      render:((date) => moment(date * 1000).format('YYYY/DD/MM/HH:mm:ss'))
    },
    {
      title: 'Rate',
      dataIndex: 'rate'
    },
    {
      title: 'TaxID',
      dataIndex: 'tax_id'
    },
    {
      title: 'Accion',
      width:1,
      render:((taxType) => 
      {
        
         return <div className='btn-actions'>
                  <ButtonEdit  summitId={summitId} taxType={taxType} />
                  <ButtonDelete summitId={summitId} taxType={taxType} />
                </div>
  
      })
    }
  ];

  const getTaxesTypesAsync = async () =>{
     dispatch(await getTaxesTypesAccion(summitId));
  };
  
  useEffect(() => {
     setLoading(true);   
     getTaxesTypesAsync().then(); 
     setLoading(false);
  }, []);

  const filteredSummit = data?.payload?.filter(taxType => {
    return taxType.name.toLowerCase().includes(search.toLowerCase());
  });

   return <>      
          <Table
          columns={columns} 
          dataSource={filteredSummit}
          rowKey="id"
          loading={loading}
          onRow={(record) => ({
            onClick: (e) => { setTaxType(record);handlerModal(e)}           
          })}
          />
          {showModal && <ModalEditAdd
           summitId={summitId}
           taxType={taxType}
           setShowModal={setShowModal}
           accion={editTaxTypeAccion}
           showModal={showModal}
          />}
         </>;
 };
