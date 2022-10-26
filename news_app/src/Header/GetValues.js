export default class Events {
    static getValues(event, ...args) {
        const value = event.target.value;

        args.forEach(set => set(value));
    }

    static setReq(cb, input , language) {
        fetch(`http://localhost:5000/news?subject=${input}&language=${language}`)
            .then(res => res.json())
            .then(cb);
    }
}