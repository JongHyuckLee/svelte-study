import React from 'react'

export default function LifeCycle() {
    const [doUpdate, setDoUpdate] = React.useState('라이프 사이클');
    React.useEffect(() => {
        console.log("모든 업데이트마다 실행");
        //componentDidMount, componentDidUpdate 수행
    });

    React.useEffect(() => {
        console.log("첫 번째 렌더링 시에만 실행");
    }, []);

    React.useEffect(() => {
        console.log("doUpdate update시에 실행");
    }, [doUpdate]);

    React.useEffect(() => {
        return () => console.log("unmount 시에 실행")
    }, [])

    return (
        <div>{doUpdate}</div>
    )
}