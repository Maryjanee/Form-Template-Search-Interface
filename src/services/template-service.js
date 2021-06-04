import { Axios, handleError } from './axios';

export default class TemplateService {
  static async getTemplates() {
    try {
      const { data } = await Axios.get('public/task_templates');
      return data;
    } catch (err) {
      const handledError = handleError(err);
      throw handledError;
    }
  }
}


