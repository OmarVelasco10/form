import { ResultForm } from "../interfaces/Form";
import { formApi } from "./formApi";

export async function fetchForm (): Promise<ResultForm[]> {
   try {
    const { data } = await formApi.get('/formExample');

    console.log(data.result);
    return data.result;

   } catch (error) {
    throw new Error('Error to fetch form information');
   }
}