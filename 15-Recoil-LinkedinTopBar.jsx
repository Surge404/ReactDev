// app.jsx
import React, { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
function App() {
  return (
    <RecoilRoot>
      <AppSmall />
    </RecoilRoot>
  )
}

function AppSmall(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const finalValue = networkNotificationCount>=100? "99+": networkNotificationCount
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const finalValue2 = jobsNotificationCount>=100? "99+": jobsNotificationCount
  const notificationNotificationCount = useRecoilValue(notificationAtom)
  const finalValue3 = notificationNotificationCount>=100? "99+": notificationNotificationCount
  const [messagingNotificationCount, messagingNotificationCountChange] = useRecoilState(messagingAtom)
  const finalValue4 = messagingNotificationCount>=100? "99+": messagingNotificationCount
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
    <button>Home</button>
    <button>My Network({finalValue})</button>
    <button>Jobs({finalValue2})</button>
    <button>Messaging({finalValue4})</button>
    <button>Notifications({finalValue3})</button>
    <button onClick={()=>{
      messagingNotificationCountChange(messagingNotificationCount+1)
    }}>Me</button>
    <div>Total noifications = {totalNotificationCount}</div>
    </>
    
  )
}

export default App




//atoms.jsx


import { atom, selector } from "recoil";  // ✅ Import `atom` from `recoil`

export const networkAtom = atom({
    key: 'networkAtom',
    default: 1122
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 1212
});

    export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
    });

    export const totalNotificationSelector = selector({
        key: "totalNotificationSelector",
        get: ({get})=>{
            const networkAtomCount = get(networkAtom);
            const jobsAtomCount = get(jobsAtom);
            const notificationAtomCount = get(notificationAtom);
            const messagingAtomCount = get(messagingAtom);
            return networkAtomCount+jobsAtomCount+notificationAtomCount+messagingAtomCount
        }
    });


