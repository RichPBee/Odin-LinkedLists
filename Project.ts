class ListNode {
    public getValue(): any {return this._value};
    public setNext(node: ListNode | null) { this._nextNode = node };
    public getNext(): ListNode | null { return this._nextNode };

    protected _value : any;
    protected _nextNode : ListNode | null;


    constructor(value = null)
    {
        this._value = value;
        this._nextNode = null;
    }
}

class LinkedList {
    protected _head: ListNode | null;
    protected _tail: ListNode | null;
    protected _size: number;

    constructor()
    {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    public head() { return this._head };
    public tail() { return this._tail };
    public size() { return this._size };

    public append(value: any)
    {
        const node = new ListNode(value);
        if (!this._head) 
        {
            this._head = node;
            this._tail = node;
        }
        else 
        {
            this._tail?.setNext(node);
            this._tail = node;
        }
        this._size++;
    }

    public prepend(value: any)
    {
        const node = new ListNode(value);
        if (this._head)
        {
            node.setNext(this._head);
            this._head = node;
        }
        else 
        {
            this._head = node;
            this._tail = node;
        }
        this._size++;
    }

    public at(index: number)
    {
        if (index > this._size || index < 0) { 
            throw new Error('Index outside of list bounds')
        };
        if (index === 0) { return this._head };
        if (index === this._size) { return this._tail};
        let nodeAt = this._head;
        if (nodeAt === null ) {return};
        for (let i = 0; i < index; i++)
        {
            if (nodeAt?.getNext() != null) {
                nodeAt = nodeAt?.getNext();
            }
            if (i === index - 1 && nodeAt != null) 
            { 
                return nodeAt;
            }
        }
    }

    public pop()
    {
        this._tail = null;
        this._size--;
        this._tail = this.at(this._size - 1);
        if (this._size < 0) { 
            throw new Error('List size at or below zero')    
        }
        else if (this._size === 0)
        {
            this._tail = this._head = null;
            return;
        }
        this._tail.setNext(null);
    }

    public contains(value: any) {
        let currNode = this._head;
        if (currNode?.getValue() === value) { return true};
        for (let i = 0; i < this._size; i++)
        {
            if (currNode?.getNext() != null)
            {
                currNode = currNode.getNext();
            }
            if (currNode?.getValue() === value)
            {
                return true;
            }
            else if (currNode?.getNext() === null)
            {
                return false;
            }
        }
    }

    public find(value: any)
    {
        let count = 0;
        let currNode = this._head;
        if (currNode?.getValue() === value) { return count };
        for (let i = 0; i < this._size; i++)
        {
            count++;
            if (currNode?.getNext() != null)
            {
                currNode = currNode.getNext();
            }
            if (currNode?.getValue() === value)
            {
                return count;
            }
            else if (currNode?.getNext() === null)
            {
                return null;
            }
        }
    }

    public toString()
    {
        let valArr: any[] = [];
        let printString = '';
        let currNode = this._head;
        valArr.push(currNode?.getValue());
        for (let i = 0; i < this._size; i++)
        {
            if (currNode?.getValue() == null) { 
                valArr.push(null);
                return 
            };
            currNode = currNode?.getNext();
            valArr.push(currNode?.getValue());
        }

        for (let i = 0; i < valArr.length; i++)
        {
            if (valArr[ i ] == null) 
            {
                printString += 'null';
                return printString;
            }
            else
            {
                printString += `( ${valArr[i]} ) -> `;
            }
        }
        return printString;
    }

    public insertAt(value: any, index: number)
    {
        if (index > this._size || index < 0) { 
            throw new Error('Index outside of list bounds')
        };
        let node = new ListNode(value);
        let changeNode = this.at(index);
        let prevNode = this.at(index - 1);
        node.setNext(changeNode.getNext());
        changeNode = node;
        prevNode.setNext(node);
    }

    public removeAt(index: number)
    {
        if (index > this._size || index < 0) { 
            throw new Error('Index outside of list bounds')
        };
        let rmvNode = this.at(index);
        let prevNode = this.at(index - 1);
        prevNode.setNext(rmvNode.getNext());
        rmvNode = null;
        this._size--;
    }
}


const linkedList = new LinkedList();
const valArray = [1, 2, 4 ,5 ,6, 7, 100, 2233, 23230013];
for (let i = 0; i < valArray.length; i ++)
{
    linkedList.append(valArray[ i ]);
}

console.log(linkedList.toString());
linkedList.insertAt(400, 50);
linkedList.pop();
console.log(linkedList.toString());