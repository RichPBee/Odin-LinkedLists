class ListNode {
    getValue() { return this._value; }
    ;
    setNext(node) { this._nextNode = node; }
    ;
    getNext() { return this._nextNode; }
    ;
    constructor(value = null) {
        this._value = value;
        this._nextNode = null;
    }
}
class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }
    head() { return this._head; }
    ;
    tail() { return this._tail; }
    ;
    size() { return this._size; }
    ;
    append(value) {
        var _a;
        const node = new ListNode(value);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        }
        else {
            (_a = this._tail) === null || _a === void 0 ? void 0 : _a.setNext(node);
            this._tail = node;
        }
        this._size++;
    }
    prepend(value) {
        const node = new ListNode(value);
        if (this._head) {
            node.setNext(this._head);
            this._head = node;
        }
        else {
            this._head = node;
            this._tail = node;
        }
        this._size++;
    }
    at(index) {
        if (index === 0) {
            return this._head;
        }
        ;
        if (index === this._size) {
            return this._tail;
        }
        ;
        if (index > this._size) {
            console.log('Index outside of list size');
            return null;
        }
        ;
        let nodeAt = this._head;
        if (nodeAt === null) {
            return;
        }
        ;
        for (let i = 0; i < index; i++) {
            if ((nodeAt === null || nodeAt === void 0 ? void 0 : nodeAt.getNext()) != null) {
                nodeAt = nodeAt === null || nodeAt === void 0 ? void 0 : nodeAt.getNext();
            }
            if (i === index - 1 && nodeAt != null) {
                return nodeAt;
            }
        }
    }
    pop() {
        this._tail = null;
        this._size--;
        this._tail = this.at(this._size - 1);
        if (this._size < 0) {
            throw new Error('List size at or below zero');
        }
        else if (this._size === 0) {
            this._tail = this._head = null;
            return;
        }
        this._tail.setNext(null);
    }
    contains(value) {
        let currNode = this._head;
        if ((currNode === null || currNode === void 0 ? void 0 : currNode.getValue()) === value) {
            return true;
        }
        ;
        for (let i = 0; i < this._size; i++) {
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.getNext()) != null) {
                currNode = currNode.getNext();
            }
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.getValue()) === value) {
                return true;
            }
            else if ((currNode === null || currNode === void 0 ? void 0 : currNode.getNext()) === null) {
                return false;
            }
        }
    }
    find(value) {
        let count = 0;
        let currNode = this._head;
        if ((currNode === null || currNode === void 0 ? void 0 : currNode.getValue()) === value) {
            return count;
        }
        ;
        for (let i = 0; i < this._size; i++) {
            count++;
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.getNext()) != null) {
                currNode = currNode.getNext();
            }
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.getValue()) === value) {
                return count;
            }
            else if ((currNode === null || currNode === void 0 ? void 0 : currNode.getNext()) === null) {
                return null;
            }
        }
    }
    toString() {
        let valArr = [];
        let printString = '';
        let currNode = this._head;
        valArr.push(currNode === null || currNode === void 0 ? void 0 : currNode.getValue());
        for (let i = 0; i < this._size; i++) {
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.getValue()) == null) {
                valArr.push(null);
                return;
            }
            ;
            currNode = currNode === null || currNode === void 0 ? void 0 : currNode.getNext();
            valArr.push(currNode === null || currNode === void 0 ? void 0 : currNode.getValue());
        }
        for (let i = 0; i < valArr.length; i++) {
            if (valArr[i] == null) {
                printString += 'null';
                return printString;
            }
            else {
                printString += `( ${valArr[i]} ) -> `;
            }
        }
        return printString;
    }
    insertAt(value, index) {
        if (index > this._size || index < 0) {
            return;
        }
        ;
        let node = new ListNode(value);
        let changeNode = this.at(index);
        let prevNode = this.at(index - 1);
        node.setNext(changeNode.getNext());
        changeNode = node;
        prevNode.setNext(node);
    }
    removeAt(index) {
        if (index > this._size || index < 0) {
            return;
        }
        ;
        let rmvNode = this.at(index);
        let prevNode = this.at(index - 1);
        prevNode.setNext(rmvNode.getNext());
        rmvNode = null;
        this._size--;
    }
}
const linkedList = new LinkedList();
const valArray = [1, 2, 4, 5, 6, 7, 100, 2233, 23230013];
for (let i = 0; i < valArray.length; i++) {
    linkedList.append(valArray[i]);
}
console.log(linkedList.toString());
linkedList.insertAt(400, 50);
linkedList.pop();
console.log(linkedList.toString());
//# sourceMappingURL=Project.js.map