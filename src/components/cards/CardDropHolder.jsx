import React from 'react';
import { DropTarget } from 'react-dnd';
import types from '../../store/types'
import GroupTask from "./GroupTask";

const cardDropTarget = {
    drop(props, monitor) {
        const item = monitor.getItem();
        console.log("card src: ", item, " target: ", props)
        // const data = {
        //     src: {
        //         columnIndex: item.parentIndex,
        //         cardIndex: item.index,
        //     },
        //     target: {
        //         columnIndex: props.parentIndex,
        //         cardIndex: props.index,
        //     },
        // };
        // props.dispatch(swapCard(data.src, data.target));
    },
    canDrop() {
        return true;
    },
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

const CardDropHolder = ({isOver,connectDropTarget,item,handleRemoveCard,index,parentIndex}) =>
    connectDropTarget(
        <div style={{ padding: '5px', opacity: isOver ? 0.5 : 1 }}>
            <GroupTask
                createdAt={item.createdAt}
                description={item.description}
                index={index}
                parentIndex={parentIndex}
                handleRemoveCard={handleRemoveCard}
            />
        </div>
    );

export default DropTarget(types.CARD, cardDropTarget, collect)(CardDropHolder);