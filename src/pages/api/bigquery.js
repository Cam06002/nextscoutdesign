const {BigQuery} = require("@google-cloud/bigquery");
const bigquery = new BigQuery();

export default function bigQueryHandler(request, response){
    const query = 
        `SELECT *
        FROM \`edfi-321322.Gradebook.Credit_Hours\'`;
    
    const options = {
        query: query,
    };

    response.json(data);
}