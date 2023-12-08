import{I as e}from"./indexhtml-c8e88e81.js";import{labelProperties as d,helperTextProperties as i,errorMessageProperties as m}from"./vaadin-text-field-0b3db014-1ee43a9d.js";import{hostElement as r,checkboxElement as t,checkedCheckboxElement as c,checkmarkElement as s,labelElement as l}from"./vaadin-checkbox-4e68df64-c4b49875.js";const k={tagName:"vaadin-checkbox-group",displayName:"Checkbox Group",elements:[{selector:"vaadin-checkbox-group",displayName:"Root element",properties:[e.backgroundColor,e.borderColor,e.borderWidth,e.borderRadius,e.padding]},{selector:"vaadin-checkbox-group::part(label)",displayName:"Label",properties:d},{selector:"vaadin-checkbox-group::part(helper-text)",displayName:"Helper text",properties:i},{selector:"vaadin-checkbox-group::part(error-message)",displayName:"Error message",properties:m},{...r,selector:`vaadin-checkbox-group ${r.selector}`,displayName:"Checkboxes"},{...t,selector:`vaadin-checkbox-group ${t.selector}`,displayName:"Checkmark boxes"},{...c,selector:`vaadin-checkbox-group ${c.selector}`,displayName:"Checkmark boxes (when checked)",stateElementSelector:"vaadin-checkbox-group vaadin-checkbox"},{...s,selector:`vaadin-checkbox-group ${s.selector}`,displayName:"Checkmarks"},{...l,selector:`vaadin-checkbox-group ${l.selector}`,displayName:"Checkbox labels"}],setupElement(p){const o=document.createElement("vaadin-checkbox"),a=document.createElement("label");a.textContent="Some label",a.setAttribute("slot","label"),o.append(a),p.append(o)}};export{k as default};
