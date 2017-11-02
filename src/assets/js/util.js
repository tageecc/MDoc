import fs from 'fs';

const FILTER_DIR = ['.git', 'node_modules', '.idea'];

/**
 * 合并className
 * @param {Array} classes
 */
export const classNames = classes => classes.filter(e => !!e).join(' ');

/**
 * 解析目录
 * @param {String} path 目录地址
 * @param {Array} filterDir 过滤的目录列表
 * @returns {Array} 地址节点JSON
 */
export const getFileList = (path, filterDir = FILTER_DIR) => {
    const nodes = [], regexp = new RegExp('/(' + filterDir.join('|') + ')');
    readFile(path, nodes, []);
    return nodes;

    function readFile(path, nodes, tmp) {
        let files = fs.readdirSync(path);
        files = [].concat(files.filter(f => fs.statSync(path + '/' + f).isDirectory()), files.filter(f => !fs.statSync(path + '/' + f).isDirectory()));
        files.map(file => {
            if (regexp.test(path + '/' + file)) return false;

            if (fs.statSync(path + '/' + file).isDirectory()) {
                let item;
                if (tmp['child']) {
                    item = {name: file, child: [], open: false};
                    tmp['child'].push(item);
                }
                else {
                    item = {name: file, child: []};
                    nodes.push(item);
                }

                readFile(path + '/' + file, nodes, item);
            }
            else {
                if (tmp['child']) {
                    let item = {name: file};
                    tmp['child'].push(item);
                }
                else {
                    let item = {name: file};
                    nodes.push(item);
                }
            }
        });

    }
};