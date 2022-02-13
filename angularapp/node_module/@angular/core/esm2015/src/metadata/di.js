/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '../di/injection_token';
import { makePropDecorator } from '../util/decorators';
/**
 * A DI token that you can use to create a virtual [provider](guide/glossary#provider)
 * that will populate the `entryComponents` field of components and NgModules
 * based on its `useValue` property value.
 * All components that are referenced in the `useValue` value (either directly
 * or in a nested array or map) are added to the `entryComponents` property.
 *
 * @usageNotes
 *
 * The following example shows how the router can populate the `entryComponents`
 * field of an NgModule based on a router configuration that refers
 * to components.
 *
 * ```typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * @NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * ```
 *
 * @publicApi
 * @deprecated Since 9.0.0. With Ivy, this property is no longer necessary.
 */
export const ANALYZE_FOR_ENTRY_COMPONENTS = new InjectionToken('AnalyzeForEntryComponents');
/**
 * Base class for query metadata.
 *
 * @see `ContentChildren`.
 * @see `ContentChild`.
 * @see `ViewChildren`.
 * @see `ViewChild`.
 *
 * @publicApi
 */
export class Query {
}
const ɵ0 = (selector, data = {}) => (Object.assign({ selector, first: false, isViewQuery: false, descendants: false }, data));
/**
 * ContentChildren decorator and metadata.
 *
 *
 * @Annotation
 * @publicApi
 */
export const ContentChildren = makePropDecorator('ContentChildren', ɵ0, Query);
const ɵ1 = (selector, data = {}) => (Object.assign({ selector, first: true, isViewQuery: false, descendants: true }, data));
/**
 * ContentChild decorator and metadata.
 *
 *
 * @Annotation
 *
 * @publicApi
 */
export const ContentChild = makePropDecorator('ContentChild', ɵ1, Query);
const ɵ2 = (selector, data = {}) => (Object.assign({ selector, first: false, isViewQuery: true, descendants: true }, data));
/**
 * ViewChildren decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export const ViewChildren = makePropDecorator('ViewChildren', ɵ2, Query);
const ɵ3 = (selector, data) => (Object.assign({ selector, first: true, isViewQuery: true, descendants: true }, data));
/**
 * ViewChild decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
export const ViewChild = makePropDecorator('ViewChild', ɵ3, Query);
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQUNILE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHLElBQUksY0FBYyxDQUFNLDJCQUEyQixDQUFDLENBQUM7QUEwRGpHOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sT0FBZ0IsS0FBSztDQUFHO1dBa0UxQixDQUFDLFFBQWMsRUFBRSxPQUFZLEVBQUUsRUFBRSxFQUFFLENBQy9CLGlCQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssSUFBSyxJQUFJLEVBQUU7QUFWbkY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUE2QixpQkFBaUIsQ0FDdEUsaUJBQWlCLE1BR2pCLEtBQUssQ0FBQyxDQUFDO1dBNERQLENBQUMsUUFBYyxFQUFFLE9BQVksRUFBRSxFQUFFLEVBQUUsQ0FDL0IsaUJBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFLLElBQUksRUFBRTtBQVhqRjs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUEwQixpQkFBaUIsQ0FDaEUsY0FBYyxNQUdkLEtBQUssQ0FBQyxDQUFDO1dBc0RQLENBQUMsUUFBYyxFQUFFLE9BQVksRUFBRSxFQUFFLEVBQUUsQ0FDL0IsaUJBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFLLElBQUksRUFBRTtBQVRqRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBMEIsaUJBQWlCLENBQ2hFLGNBQWMsTUFHZCxLQUFLLENBQUMsQ0FBQztXQW9FUCxDQUFDLFFBQWEsRUFBRSxJQUFTLEVBQUUsRUFBRSxDQUN6QixpQkFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUssSUFBSSxFQUFFO0FBVGhGOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUF1QixpQkFBaUIsQ0FDMUQsV0FBVyxNQUdYLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4uL2RpL2luamVjdGlvbl90b2tlbic7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7bWFrZVByb3BEZWNvcmF0b3J9IGZyb20gJy4uL3V0aWwvZGVjb3JhdG9ycyc7XG5cbi8qKlxuICogQSBESSB0b2tlbiB0aGF0IHlvdSBjYW4gdXNlIHRvIGNyZWF0ZSBhIHZpcnR1YWwgW3Byb3ZpZGVyXShndWlkZS9nbG9zc2FyeSNwcm92aWRlcilcbiAqIHRoYXQgd2lsbCBwb3B1bGF0ZSB0aGUgYGVudHJ5Q29tcG9uZW50c2AgZmllbGQgb2YgY29tcG9uZW50cyBhbmQgTmdNb2R1bGVzXG4gKiBiYXNlZCBvbiBpdHMgYHVzZVZhbHVlYCBwcm9wZXJ0eSB2YWx1ZS5cbiAqIEFsbCBjb21wb25lbnRzIHRoYXQgYXJlIHJlZmVyZW5jZWQgaW4gdGhlIGB1c2VWYWx1ZWAgdmFsdWUgKGVpdGhlciBkaXJlY3RseVxuICogb3IgaW4gYSBuZXN0ZWQgYXJyYXkgb3IgbWFwKSBhcmUgYWRkZWQgdG8gdGhlIGBlbnRyeUNvbXBvbmVudHNgIHByb3BlcnR5LlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGhvdyB0aGUgcm91dGVyIGNhbiBwb3B1bGF0ZSB0aGUgYGVudHJ5Q29tcG9uZW50c2BcbiAqIGZpZWxkIG9mIGFuIE5nTW9kdWxlIGJhc2VkIG9uIGEgcm91dGVyIGNvbmZpZ3VyYXRpb24gdGhhdCByZWZlcnNcbiAqIHRvIGNvbXBvbmVudHMuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gaGVscGVyIGZ1bmN0aW9uIGluc2lkZSB0aGUgcm91dGVyXG4gKiBmdW5jdGlvbiBwcm92aWRlUm91dGVzKHJvdXRlcykge1xuICogICByZXR1cm4gW1xuICogICAgIHtwcm92aWRlOiBST1VURVMsIHVzZVZhbHVlOiByb3V0ZXN9LFxuICogICAgIHtwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogcm91dGVzLCBtdWx0aTogdHJ1ZX1cbiAqICAgXTtcbiAqIH1cbiAqXG4gKiAvLyB1c2VyIGNvZGVcbiAqIGxldCByb3V0ZXMgPSBbXG4gKiAgIHtwYXRoOiAnL3Jvb3QnLCBjb21wb25lbnQ6IFJvb3RDb21wfSxcbiAqICAge3BhdGg6ICcvdGVhbXMnLCBjb21wb25lbnQ6IFRlYW1zQ29tcH1cbiAqIF07XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgcHJvdmlkZXJzOiBbcHJvdmlkZVJvdXRlcyhyb3V0ZXMpXVxuICogfSlcbiAqIGNsYXNzIE1vZHVsZVdpdGhSb3V0ZXMge31cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXByZWNhdGVkIFNpbmNlIDkuMC4wLiBXaXRoIEl2eSwgdGhpcyBwcm9wZXJ0eSBpcyBubyBsb25nZXIgbmVjZXNzYXJ5LlxuICovXG5leHBvcnQgY29uc3QgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdBbmFseXplRm9yRW50cnlDb21wb25lbnRzJyk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgYEF0dHJpYnV0ZWAgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhhdCBhIGNvbnN0YW50IGF0dHJpYnV0ZSB2YWx1ZSBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gICAqXG4gICAqIFRoZSBkaXJlY3RpdmUgY2FuIGluamVjdCBjb25zdGFudCBzdHJpbmcgbGl0ZXJhbHMgb2YgaG9zdCBlbGVtZW50IGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIFN1cHBvc2Ugd2UgaGF2ZSBhbiBgPGlucHV0PmAgZWxlbWVudCBhbmQgd2FudCB0byBrbm93IGl0cyBgdHlwZWAuXG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAqIGBgYFxuICAgKlxuICAgKiBBIGRlY29yYXRvciBjYW4gaW5qZWN0IHN0cmluZyBsaXRlcmFsIGB0ZXh0YCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL21ldGFkYXRhLnRzIHJlZ2lvbj0nYXR0cmlidXRlTWV0YWRhdGEnfVxuICAgKlxuICAgKiBAcHVibGljQXBpXG4gICAqL1xuICAobmFtZTogc3RyaW5nKTogYW55O1xuICBuZXcobmFtZTogc3RyaW5nKTogQXR0cmlidXRlO1xufVxuXG5cbi8qKlxuICogVHlwZSBvZiB0aGUgQXR0cmlidXRlIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBiZSBpbmplY3RlZCBpbnRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGF0dHJpYnV0ZU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgUXVlcnkgbWV0YWRhdGEuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgZGVzY2VuZGFudHM6IGJvb2xlYW47XG4gIGZpcnN0OiBib29sZWFuO1xuICByZWFkOiBhbnk7XG4gIGlzVmlld1F1ZXJ5OiBib29sZWFuO1xuICBzZWxlY3RvcjogYW55O1xuICBzdGF0aWM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHF1ZXJ5IG1ldGFkYXRhLlxuICpcbiAqIEBzZWUgYENvbnRlbnRDaGlsZHJlbmAuXG4gKiBAc2VlIGBDb250ZW50Q2hpbGRgLlxuICogQHNlZSBgVmlld0NoaWxkcmVuYC5cbiAqIEBzZWUgYFZpZXdDaGlsZGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUXVlcnkge31cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGRyZW4gZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICogQHNlZSBgQ29udGVudENoaWxkcmVuYC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50Q2hpbGRyZW5EZWNvcmF0b3Ige1xuICAvKipcbiAgICogUGFyYW1ldGVyIGRlY29yYXRvciB0aGF0IGNvbmZpZ3VyZXMgYSBjb250ZW50IHF1ZXJ5LlxuICAgKlxuICAgKiBVc2UgdG8gZ2V0IHRoZSBgUXVlcnlMaXN0YCBvZiBlbGVtZW50cyBvciBkaXJlY3RpdmVzIGZyb20gdGhlIGNvbnRlbnQgRE9NLlxuICAgKiBBbnkgdGltZSBhIGNoaWxkIGVsZW1lbnQgaXMgYWRkZWQsIHJlbW92ZWQsIG9yIG1vdmVkLCB0aGUgcXVlcnkgbGlzdCB3aWxsIGJlXG4gICAqIHVwZGF0ZWQsIGFuZCB0aGUgY2hhbmdlcyBvYnNlcnZhYmxlIG9mIHRoZSBxdWVyeSBsaXN0IHdpbGwgZW1pdCBhIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogQ29udGVudCBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlckNvbnRlbnRJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqIERvZXMgbm90IHJldHJpZXZlIGVsZW1lbnRzIG9yIGRpcmVjdGl2ZXMgdGhhdCBhcmUgaW4gb3RoZXIgY29tcG9uZW50cycgdGVtcGxhdGVzLFxuICAgKiBzaW5jZSBhIGNvbXBvbmVudCdzIHRlbXBsYXRlIGlzIGFsd2F5cyBhIGJsYWNrIGJveCB0byBpdHMgYW5jZXN0b3JzLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipkZXNjZW5kYW50cyoqIC0gVHJ1ZSB0byBpbmNsdWRlIGFsbCBkZXNjZW5kYW50cywgb3RoZXJ3aXNlIGluY2x1ZGUgb25seSBkaXJlY3QgY2hpbGRyZW4uXG4gICAqICogKipyZWFkKiogLSBVc2VkIHRvIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogSGVyZSBpcyBhIHNpbXBsZSBkZW1vbnN0cmF0aW9uIG9mIGhvdyB0aGUgYENvbnRlbnRDaGlsZHJlbmAgZGVjb3JhdG9yIGNhbiBiZSB1c2VkLlxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGRyZW4vY29udGVudF9jaGlsZHJlbl9ob3d0by50cyByZWdpb249J0hvd1RvJ31cbiAgICpcbiAgICogIyMjIFRhYi1wYW5lIGV4YW1wbGVcbiAgICpcbiAgICogSGVyZSBpcyBhIHNsaWdodGx5IG1vcmUgcmVhbGlzdGljIGV4YW1wbGUgdGhhdCBzaG93cyBob3cgYENvbnRlbnRDaGlsZHJlbmAgZGVjb3JhdG9yc1xuICAgKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgYSB0YWIgcGFuZSBjb21wb25lbnQuXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL2NvbnRlbnRDaGlsZHJlbi9jb250ZW50X2NoaWxkcmVuX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgKlxuICAgKiBAQW5ub3RhdGlvblxuICAgKi9cbiAgKHNlbGVjdG9yOiBUeXBlPGFueT58SW5qZWN0aW9uVG9rZW48dW5rbm93bj58RnVuY3Rpb258c3RyaW5nLFxuICAgb3B0cz86IHtkZXNjZW5kYW50cz86IGJvb2xlYW4sIHJlYWQ/OiBhbnl9KTogYW55O1xuICBuZXcoc2VsZWN0b3I6IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjx1bmtub3duPnxGdW5jdGlvbnxzdHJpbmcsXG4gICAgICBvcHRzPzoge2Rlc2NlbmRhbnRzPzogYm9vbGVhbiwgcmVhZD86IGFueX0pOiBRdWVyeTtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBDb250ZW50Q2hpbGRyZW4gbWV0YWRhdGEuXG4gKlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIENvbnRlbnRDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQ29udGVudENoaWxkcmVuOiBDb250ZW50Q2hpbGRyZW5EZWNvcmF0b3IgPSBtYWtlUHJvcERlY29yYXRvcihcbiAgICAnQ29udGVudENoaWxkcmVuJyxcbiAgICAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PlxuICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogZmFsc2UsIGlzVmlld1F1ZXJ5OiBmYWxzZSwgZGVzY2VuZGFudHM6IGZhbHNlLCAuLi5kYXRhfSksXG4gICAgUXVlcnkpO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZCBkZWNvcmF0b3IgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudENoaWxkRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIFBhcmFtZXRlciBkZWNvcmF0b3IgdGhhdCBjb25maWd1cmVzIGEgY29udGVudCBxdWVyeS5cbiAgICpcbiAgICogVXNlIHRvIGdldCB0aGUgZmlyc3QgZWxlbWVudCBvciB0aGUgZGlyZWN0aXZlIG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmcm9tIHRoZSBjb250ZW50IERPTS5cbiAgICogSWYgdGhlIGNvbnRlbnQgRE9NIGNoYW5nZXMsIGFuZCBhIG5ldyBjaGlsZCBtYXRjaGVzIHRoZSBzZWxlY3RvcixcbiAgICogdGhlIHByb3BlcnR5IHdpbGwgYmUgdXBkYXRlZC5cbiAgICpcbiAgICogQ29udGVudCBxdWVyaWVzIGFyZSBzZXQgYmVmb3JlIHRoZSBgbmdBZnRlckNvbnRlbnRJbml0YCBjYWxsYmFjayBpcyBjYWxsZWQuXG4gICAqXG4gICAqIERvZXMgbm90IHJldHJpZXZlIGVsZW1lbnRzIG9yIGRpcmVjdGl2ZXMgdGhhdCBhcmUgaW4gb3RoZXIgY29tcG9uZW50cycgdGVtcGxhdGVzLFxuICAgKiBzaW5jZSBhIGNvbXBvbmVudCdzIHRlbXBsYXRlIGlzIGFsd2F5cyBhIGJsYWNrIGJveCB0byBpdHMgYW5jZXN0b3JzLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipyZWFkKiogLSBVc2VkIHRvIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50LlxuICAgKiAqICoqc3RhdGljKiogLSBUcnVlIHRvIHJlc29sdmUgcXVlcnkgcmVzdWx0cyBiZWZvcmUgY2hhbmdlIGRldGVjdGlvbiBydW5zLFxuICAgKiBmYWxzZSB0byByZXNvbHZlIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9jb250ZW50Q2hpbGQvY29udGVudF9jaGlsZF9ob3d0by50cyByZWdpb249J0hvd1RvJ31cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvY29udGVudENoaWxkL2NvbnRlbnRfY2hpbGRfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqIEBBbm5vdGF0aW9uXG4gICAqL1xuICAoc2VsZWN0b3I6IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjx1bmtub3duPnxGdW5jdGlvbnxzdHJpbmcsXG4gICBvcHRzPzoge3JlYWQ/OiBhbnksIHN0YXRpYz86IGJvb2xlYW59KTogYW55O1xuICBuZXcoc2VsZWN0b3I6IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjx1bmtub3duPnxGdW5jdGlvbnxzdHJpbmcsXG4gICAgICBvcHRzPzoge3JlYWQ/OiBhbnksIHN0YXRpYz86IGJvb2xlYW59KTogQ29udGVudENoaWxkO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIENvbnRlbnRDaGlsZCBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIENvbnRlbnRDaGlsZCA9IFF1ZXJ5O1xuXG4vKipcbiAqIENvbnRlbnRDaGlsZCBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqXG4gKiBAQW5ub3RhdGlvblxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRlbnRDaGlsZDogQ29udGVudENoaWxkRGVjb3JhdG9yID0gbWFrZVByb3BEZWNvcmF0b3IoXG4gICAgJ0NvbnRlbnRDaGlsZCcsXG4gICAgKHNlbGVjdG9yPzogYW55LCBkYXRhOiBhbnkgPSB7fSkgPT5cbiAgICAgICAgKHtzZWxlY3RvciwgZmlyc3Q6IHRydWUsIGlzVmlld1F1ZXJ5OiBmYWxzZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSxcbiAgICBRdWVyeSk7XG5cbi8qKlxuICogVHlwZSBvZiB0aGUgVmlld0NoaWxkcmVuIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBzZWUgYFZpZXdDaGlsZHJlbmAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdDaGlsZHJlbkRlY29yYXRvciB7XG4gIC8qKlxuICAgKiBQYXJhbWV0ZXIgZGVjb3JhdG9yIHRoYXQgY29uZmlndXJlcyBhIHZpZXcgcXVlcnkuXG4gICAqXG4gICAqIFVzZSB0byBnZXQgdGhlIGBRdWVyeUxpc3RgIG9mIGVsZW1lbnRzIG9yIGRpcmVjdGl2ZXMgZnJvbSB0aGUgdmlldyBET00uXG4gICAqIEFueSB0aW1lIGEgY2hpbGQgZWxlbWVudCBpcyBhZGRlZCwgcmVtb3ZlZCwgb3IgbW92ZWQsIHRoZSBxdWVyeSBsaXN0IHdpbGwgYmUgdXBkYXRlZCxcbiAgICogYW5kIHRoZSBjaGFuZ2VzIG9ic2VydmFibGUgb2YgdGhlIHF1ZXJ5IGxpc3Qgd2lsbCBlbWl0IGEgbmV3IHZhbHVlLlxuICAgKlxuICAgKiBWaWV3IHF1ZXJpZXMgYXJlIHNldCBiZWZvcmUgdGhlIGBuZ0FmdGVyVmlld0luaXRgIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAgICpcbiAgICogKipNZXRhZGF0YSBQcm9wZXJ0aWVzKio6XG4gICAqXG4gICAqICogKipzZWxlY3RvcioqIC0gVGhlIGRpcmVjdGl2ZSB0eXBlIG9yIHRoZSBuYW1lIHVzZWQgZm9yIHF1ZXJ5aW5nLlxuICAgKiAqICoqcmVhZCoqIC0gVXNlZCB0byByZWFkIGEgZGlmZmVyZW50IHRva2VuIGZyb20gdGhlIHF1ZXJpZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3ZpZXdDaGlsZHJlbi92aWV3X2NoaWxkcmVuX2hvd3RvLnRzIHJlZ2lvbj0nSG93VG8nfVxuICAgKlxuICAgKiAjIyMgQW5vdGhlciBleGFtcGxlXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3ZpZXdDaGlsZHJlbi92aWV3X2NoaWxkcmVuX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgKlxuICAgKiBAQW5ub3RhdGlvblxuICAgKi9cbiAgKHNlbGVjdG9yOiBUeXBlPGFueT58SW5qZWN0aW9uVG9rZW48dW5rbm93bj58RnVuY3Rpb258c3RyaW5nLCBvcHRzPzoge3JlYWQ/OiBhbnl9KTogYW55O1xuICBuZXcoc2VsZWN0b3I6IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjx1bmtub3duPnxGdW5jdGlvbnxzdHJpbmcsXG4gICAgICBvcHRzPzoge3JlYWQ/OiBhbnl9KTogVmlld0NoaWxkcmVuO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFZpZXdDaGlsZHJlbiBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIFZpZXdDaGlsZHJlbiA9IFF1ZXJ5O1xuXG4vKipcbiAqIFZpZXdDaGlsZHJlbiBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBWaWV3Q2hpbGRyZW46IFZpZXdDaGlsZHJlbkRlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAgICdWaWV3Q2hpbGRyZW4nLFxuICAgIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICh7c2VsZWN0b3IsIGZpcnN0OiBmYWxzZSwgaXNWaWV3UXVlcnk6IHRydWUsIGRlc2NlbmRhbnRzOiB0cnVlLCAuLi5kYXRhfSksXG4gICAgUXVlcnkpO1xuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFZpZXdDaGlsZCBkZWNvcmF0b3IgLyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqXG4gKiBAc2VlIGBWaWV3Q2hpbGRgLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdDaGlsZERlY29yYXRvciB7XG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29uZmlndXJlcyBhIHZpZXcgcXVlcnkuXG4gICAqIFRoZSBjaGFuZ2UgZGV0ZWN0b3IgbG9va3MgZm9yIHRoZSBmaXJzdCBlbGVtZW50IG9yIHRoZSBkaXJlY3RpdmUgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAqIGluIHRoZSB2aWV3IERPTS4gSWYgdGhlIHZpZXcgRE9NIGNoYW5nZXMsIGFuZCBhIG5ldyBjaGlsZCBtYXRjaGVzIHRoZSBzZWxlY3RvcixcbiAgICogdGhlIHByb3BlcnR5IGlzIHVwZGF0ZWQuXG4gICAqXG4gICAqIFZpZXcgcXVlcmllcyBhcmUgc2V0IGJlZm9yZSB0aGUgYG5nQWZ0ZXJWaWV3SW5pdGAgY2FsbGJhY2sgaXMgY2FsbGVkLlxuICAgKlxuICAgKiAqKk1ldGFkYXRhIFByb3BlcnRpZXMqKjpcbiAgICpcbiAgICogKiAqKnNlbGVjdG9yKiogLSBUaGUgZGlyZWN0aXZlIHR5cGUgb3IgdGhlIG5hbWUgdXNlZCBmb3IgcXVlcnlpbmcuXG4gICAqICogKipyZWFkKiogLSBVc2VkIHRvIHJlYWQgYSBkaWZmZXJlbnQgdG9rZW4gZnJvbSB0aGUgcXVlcmllZCBlbGVtZW50cy5cbiAgICogKiAqKnN0YXRpYyoqIC0gVHJ1ZSB0byByZXNvbHZlIHF1ZXJ5IHJlc3VsdHMgYmVmb3JlIGNoYW5nZSBkZXRlY3Rpb24gcnVucyxcbiAgICogZmFsc2UgdG8gcmVzb2x2ZSBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICpcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBzZWxlY3RvcnMgYXJlIHN1cHBvcnRlZC5cbiAgICogICAqIEFueSBjbGFzcyB3aXRoIHRoZSBgQENvbXBvbmVudGAgb3IgYEBEaXJlY3RpdmVgIGRlY29yYXRvclxuICAgKiAgICogQSB0ZW1wbGF0ZSByZWZlcmVuY2UgdmFyaWFibGUgYXMgYSBzdHJpbmcgKGUuZy4gcXVlcnkgYDxteS1jb21wb25lbnQgI2NtcD48L215LWNvbXBvbmVudD5gXG4gICAqIHdpdGggYEBWaWV3Q2hpbGQoJ2NtcCcpYClcbiAgICogICAqIEFueSBwcm92aWRlciBkZWZpbmVkIGluIHRoZSBjaGlsZCBjb21wb25lbnQgdHJlZSBvZiB0aGUgY3VycmVudCBjb21wb25lbnQgKGUuZy5cbiAgICogYEBWaWV3Q2hpbGQoU29tZVNlcnZpY2UpIHNvbWVTZXJ2aWNlOiBTb21lU2VydmljZWApXG4gICAqICAgKiBBbnkgcHJvdmlkZXIgZGVmaW5lZCB0aHJvdWdoIGEgc3RyaW5nIHRva2VuIChlLmcuIGBAVmlld0NoaWxkKCdzb21lVG9rZW4nKSBzb21lVG9rZW5WYWw6XG4gICAqIGFueWApXG4gICAqICAgKiBBIGBUZW1wbGF0ZVJlZmAgKGUuZy4gcXVlcnkgYDxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPmAgd2l0aCBgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZilcbiAgICogdGVtcGxhdGU7YClcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAqXG4gICAqICMjIyBFeGFtcGxlIDJcbiAgICpcbiAgICoge0BleGFtcGxlIGNvcmUvZGkvdHMvdmlld0NoaWxkL3ZpZXdfY2hpbGRfaG93dG8udHMgcmVnaW9uPSdIb3dUbyd9XG4gICAqXG4gICAqIEBBbm5vdGF0aW9uXG4gICAqL1xuICAoc2VsZWN0b3I6IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjx1bmtub3duPnxGdW5jdGlvbnxzdHJpbmcsXG4gICBvcHRzPzoge3JlYWQ/OiBhbnksIHN0YXRpYz86IGJvb2xlYW59KTogYW55O1xuICBuZXcoc2VsZWN0b3I6IFR5cGU8YW55PnxJbmplY3Rpb25Ub2tlbjx1bmtub3duPnxGdW5jdGlvbnxzdHJpbmcsXG4gICAgICBvcHRzPzoge3JlYWQ/OiBhbnksIHN0YXRpYz86IGJvb2xlYW59KTogVmlld0NoaWxkO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIFZpZXdDaGlsZCBtZXRhZGF0YS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIFZpZXdDaGlsZCA9IFF1ZXJ5O1xuXG4vKipcbiAqIFZpZXdDaGlsZCBkZWNvcmF0b3IgYW5kIG1ldGFkYXRhLlxuICpcbiAqIEBBbm5vdGF0aW9uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBWaWV3Q2hpbGQ6IFZpZXdDaGlsZERlY29yYXRvciA9IG1ha2VQcm9wRGVjb3JhdG9yKFxuICAgICdWaWV3Q2hpbGQnLFxuICAgIChzZWxlY3RvcjogYW55LCBkYXRhOiBhbnkpID0+XG4gICAgICAgICh7c2VsZWN0b3IsIGZpcnN0OiB0cnVlLCBpc1ZpZXdRdWVyeTogdHJ1ZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSxcbiAgICBRdWVyeSk7XG4iXX0=