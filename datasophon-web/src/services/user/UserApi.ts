import ajax, { AjaxPromise } from '@ajax';
export class UserApi {
    protected $basePath = ''.replace(/\/$/, '');

    public constructor(basePath?: string) {
        if (basePath !== undefined) {
          this.$basePath = basePath.replace(/\/$/, '');
        }
    }

    public save (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/api/user/save`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public update (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/api/user/update`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }
}

export default new UserApi()