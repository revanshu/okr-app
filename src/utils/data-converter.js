export default class DataConverter {

    getTransformedData(data){
        return data.filter(d => d.parent_objective_id === "")
        .map(d => {
            d.childs = data.filter(dinner => dinner.parent_objective_id === d.id)
            return d;
        });
    }

    getFilters(data){
        let filters = [];
        data.forEach(d => {
            if(filters.find(e => e === d.category) == null){
                filters.push(d.category);
            }
        });
        return filters;
    }
}