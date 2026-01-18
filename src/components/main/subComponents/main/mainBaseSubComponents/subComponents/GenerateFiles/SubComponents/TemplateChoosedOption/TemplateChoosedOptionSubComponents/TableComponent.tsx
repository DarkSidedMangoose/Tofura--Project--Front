import React, { Fragment, useState } from 'react'
import RenderFieldQuestionary from './RenderFieldQuestionary'
import RenderFieldTable from './RenderFieldTable'
import TableChild from './TableChild'

type Props = {}

export interface TopTableChildrenInterface {
    name: string,
    type: string,
    value: {numberValue: number}
}

const TableComponent = (props: Props) => {
    const [topTableChildren, setTopTableChildren] = useState<TopTableChildrenInterface[]>([
                
                {
                  name: 'სვეტების რაოდენობა',
                  type: 'input',
                  value: { numberValue: 2 },
                },
                {
                  name: '1-ლი სვეტის სიგრძის %',
                  type: 'input',
                  value: { numberValue:  50},
        },
                {
                  name: 'მე-2 სვეტის სიგრძის %',
                  type: 'input',
                  value: { numberValue:  50},
                },
              ],)
  return (
      <div className='absolute w-full h-full bg-loginBackground top-0 left-0 z-[50] flex justify-center items-center'>
          <div className='w-[1000px] max-h-[800px] h-[800px] bg-white overflow-y-auto'>
              <header className='w-full h-[80px] bg-sidebarChoose flex justify-center items-center'>
                  <p className='text-white font-extrabold text-lg'>ცხრილი</p>
              </header>
              <body className='w-full h-auto flex flex-col gap-4 '>
                  <div className='w-full h-[100px] flex justify-center items-center'>ცხრილის პარამეტრები</div>
                  <div className='w-full h-[200px]  bg-white flex justify-center items-center'>
                      <div className=" flex w-auto max-w-[1000px] flex-col  items-center overflow-x-auto gap-4">
                          <div className='min-w-[100px] flex flex-col justify-center items-center w-auto gap-4'>
                              <div className='w-full flex justify-center items-center'>
                                          {topTableChildren[0].name}
                                      </div>
                              <RenderFieldTable identifier={'headerTable'} optionIndex={0} option={topTableChildren[0]} state={topTableChildren} setState={setTopTableChildren} />
                          </div>
                      <div className=" flex w-auto max-w-[1000px]   items-center overflow-x-auto gap-4">
                          
                          {topTableChildren.map((item, itemIndex) => (
                              itemIndex !== 0 ? (
                                  
                                  <div className='min-w-[100px] w-auto flex  items-center justify-center'>
                                  
                                      <div className='w-full flex justify-center items-center'>
                                          {item.name}
                                      </div>
                                      <RenderFieldTable identifier={"headerTable"} optionIndex={itemIndex} option={item} state={topTableChildren} setState={setTopTableChildren} />
                                
                                  </div>
                              ) : <Fragment></Fragment>
                          ))}
                              
                          </div>
                        </div>
                  </div>
                  <div
                      style={{
                          display: "grid", gridTemplateColumns: topTableChildren.slice(1).map(item => `${item.value.numberValue}fr`) .join(" ")
                      }}
                      className='w-full h-auto min-h-[100px] bg-white border-2 '>
                      
                      {topTableChildren.map((item, itemIndex) => (
                           itemIndex !== 0 && (
                              <div className='w-full h-auto border-[1px] text-[15px] border-black'>...</div>
                              
                          )
                     ))}
                  </div>
                  <div className='w-full min-h-[350px] bg-white'>
                      <TableChild />
                  </div>
              </body>
          </div>
    </div>
  )
}

export default TableComponent