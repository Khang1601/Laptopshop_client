import React from 'react'
import { useSelector } from 'react-redux'


export default function Receipt() {
    const {receiptStore} = useSelector(state => state);
  return (
    <div>
        <ul>
            {
                receiptStore.receipt?.map((item, index) => {
                    return (
                        <li key={Date.now() * Math.random()}>
                            <div>
                                <div>
                                    Receipt ID: {item.id}
                                </div>
                                <div>
                                    User Email: {item.user.email}
                                </div>
                                <div>
                                    Total {item.total}
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
