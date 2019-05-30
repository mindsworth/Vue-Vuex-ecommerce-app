import paginationPipe from './paginationPipe'
export const createActionString = ( type, entity = 'App' ) =>
	`[${entity}] ${type}`;

export default {
	paginationPipe
}