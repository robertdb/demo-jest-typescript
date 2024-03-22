import linkedList from './linked-list';


describe("Linked list", () => {
  it('should create empty linked list', () => {
    const linked = linkedList();

    expect(linked.getList()).toEqual([]);
  });

  it('should append node to linked list', () => {
    const linked = linkedList();

    expect(linked.getHead()).toBeUndefined();
    expect(linked.getTail()).toBeUndefined();

    linked.append(1);

    expect(linked.getList()).toEqual([1]);
  });

  it('should append 2 values to linked list', () => {
    const linked = linkedList();

    linked.append(1);
    linked.append(2);

    expect(linked.getList()).toEqual([1, 2]);
  });

  it('should prepend node to linked list', () => {
    const linked = linkedList();

    linked.append(1);
    linked.append(2);
    linked.append(3);
    linked.append(4);
    linked.preAppend(5);

    expect(linked.getList()).toEqual([5,1,2,3,4]);
  });

  it('should prepend node to linked list', () => {
    const linked = linkedList();

    linked.append(1);
    linked.append(2);
    linked.append(3);
    linked.append(4);
    linked.preAppend(5);

    expect(linked.getList()).toEqual([5,1,2,3,4]);
  });

  it('should delete by value from linked list', () => {

  });

});
