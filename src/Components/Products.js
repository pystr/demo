import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `${k + offset}`,
        content: `Ürün ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    background: isDragging ? 'lightgreen' : 'lightblue',

    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});

class Products extends Component {
    state = {
        items: getItems(10),
        selected: getItems(5, 10)
    };

   
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

       
        if (!destination) {
            return;
        }
        

        if (source.droppableId === destination.droppableId) {
          
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };
            if (source.droppableId === 'droppable2') {
                state = { selected: items };
                
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

   render() {
        return (
          
          <div className="container">
            <div className="login-form" style={{"display":"flex","justify-content": "space-between;"}} >
  
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div>Ürünler</div>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            
               <div>Sepet</div>
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.selected.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
           <div>
            
             <button onClick={()=>{this.getList('droppable2').map((val,key)=>{
             console.log('Sepetinizdeki ürünler'+val.content  );
           })}}>Siparişi onayla</button>
           </div>
            </DragDropContext>
       </div>
       </div>
       );
    }
}

export default Products;

