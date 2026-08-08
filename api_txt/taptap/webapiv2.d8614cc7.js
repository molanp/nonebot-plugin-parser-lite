(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
          , t = new Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "3156ed81-9962-41f7-890e-21f6892d59a4",
        e._sentryDebugIdIdentifier = "sentry-dbid-3156ed81-9962-41f7-890e-21f6892d59a4")
    } catch {}
}
)();
var o = (e => (e.Json = "application/json",
e.FormData = "multipart/form-data",
e.UrlEncoded = "application/x-www-form-urlencoded",
e.Text = "text/plain",
e))(o || {});
const yt = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/abtest/v1/get-experiment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wt = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/abtest/v1/get-multi-experiments",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/abtest/v2/get-experiment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Et = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/account-profile/v1/counts",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/account-profile/v1/me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ut = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/account/v1/set-user-verify",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ot = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/account/v1/user-verifies",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v1/app-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v1/app-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , St = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v1/detail-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v1/detail-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , At = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ft = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v1/list-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ct = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v2/app-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v2/app-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v2/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , It = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v2/list-by-me-and-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _t = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v2/list-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/achievement/v2/list-by-user-and-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ht = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-award/v1/get-badge-2022",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v1/announcement",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rt = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v1/exchange-and-lottery",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $t = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v1/exchange-prize",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v1/my-prize-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v1/prize-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nt = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-exchange/v2/exchange-and-lottery",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qt = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-group-buy/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-group-buy/v1/get-by-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-group-buy/v1/get-by-host",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qt = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-group-buy/v1/join",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Mt = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-lottery/v1/my-remain",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ea = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-score/v1/log",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ta = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-score/v1/my-score-total",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , aa = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-task/v1/finish-task",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , oa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-task/v1/invite-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-task/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-task/v1/multi-get-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ra = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-task/v1/receive-reward",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ia = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-task/v1/submit-passcode",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , va = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , na = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ma = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , da = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/get-votes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ba = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/get-votes-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ca = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/my-vote-records",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ha = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , la = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity-vote/v1/vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Va = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/anniversary/get-7th-share-badge",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ta = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/anniversary/v1/claim-tenth-score",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ga = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/anniversary/v1/tenth-check-in",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ua = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/anniversary/v1/tenth-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/anniversary/v1/tenth-game-spend-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/anniversary/v1/tenth-my-prize",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ya = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/cloudsave/apply-steam-save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/cloudsave/config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ja = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/cloudsave/get-backup-cloudsave-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ea = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/cloudsave/get-cloudsave-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ga = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/cloudsave/restore-backup-save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ua = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/check-apps-can-vote",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Oa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/get-app-rank-by-key",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/get-by-year",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ka = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/get-my-vote-records",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/get-rank-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , La = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/get-ticket-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Aa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/get-tmp-user-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/my-vote-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ca = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/my-votes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Da = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/receive-badge",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ba = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ia = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v1/vote-apps",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _a = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v2/get-live-activity-award",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-award/v2/get-rank-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ha = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/app-list-by-event",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , za = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/event-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ja = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/event-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ra = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/game-multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $a = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/get-categories",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ka = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/get-nominations",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ya = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/get-user-register",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Na = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/recommend-games",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qa = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/register",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/score-log",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Za = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/score-total",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qa = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/search-participants",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ma = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/user-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/user-vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , to = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/game-jam/v1/user-vote-log",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ao = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/h5-game/get-user-close-game",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/h5-game/upload-h5-game-record",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , po = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , so = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/get-my-awards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ro = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/get-my-moments",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , io = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/get-pk",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , no = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/search-props-category",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/image-gallery/v1/search-props-item",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/create-team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , co = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/get-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ho = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/get-me-team",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/get-team-by-id",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/join-team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , To = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/join-team-for-livelink",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , go = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/leave-team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , uo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/my-prize-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/invite-team/v1/transfer-team-leader",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/bind",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/complete-task",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-activity-url",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-address",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Eo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-coin-exchange-uris",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Go = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-flow-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Uo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-game-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Oo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-game-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Po = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-jf-cloud",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ko = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-lottery-record",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , So = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/get-pre-role",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/lottery-count",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ao = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/lottery-draw",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/lottery-result",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Co = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/pre-create-role",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Do = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/process-lottery-flow",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Bo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/receive-task-reward",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Io = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/save-address",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _o = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/task-result",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v1/team-lottery",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ho = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v2/bind",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v2/get-address",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jo = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/livelink/v2/save-address",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ro = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/lottery/v1/announcement",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $o = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/lottery/v1/app-lottery-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ko = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/lottery/v1/multi-my-prizes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/lottery/v1/prize-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , No = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/lottery/v2/draw",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/lottery/v2/my-prizes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/matrix-task/v1/get-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/mini-game/v1/get-init",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/mini-game/v1/get-leader-board",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mo = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/mini-game/v1/get-legit",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ep = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/mini-game/v1/save-user-score",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , tp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/pc-game-spend-task/v1/claim-new-user-coin",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ap = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/pc-game-spend-task/v1/get-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , op = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/pc-new-user-welfare/v1/claim",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/pc-new-user-welfare/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/present/v1/trial-app-top",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/prize/v1/get-user-prize-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ip = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/prize/v1/get-user-prize-token-link",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/prize/v1/save-user-consignee",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , np = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/prize/v2/save-user-consignee",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , mp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/rank/v1/score-add",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/rank/v1/side-choose",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/rank/v1/side-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/rank/v1/side-score-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/rank/v1/user-side-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/score/v1/get-my-score-milestone-prizes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/score/v1/get-score-milestone",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/score/v1/receive-score-milestone-prize",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/steam/v1/get-wish-list-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , up = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/steam/v1/join-wish-list",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/bind-user-invite-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/complete-invite-by-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/complete-invite-by-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/get-invite-code-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/get-tasks-completed-total",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ep = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/get-user-info-by-task-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/task/v1/get-user-invite-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Up = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/create-team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Op = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/get-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/get-me-team",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/get-team-by-id",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/get-team-score",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/get-user-score",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ap = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/join-activity",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/join-team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/join-team-for-livelink",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/leave-team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Bp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/team/v1/transfer-team-leader",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ip = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/detail-2023",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _p = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/detail-2024",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/detail-2025",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/get-badge",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/get-badge-2024",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/grant-badge",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/user-annual-data/v1/grant-badge-2024",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $p = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/v1/get-user-tmp-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/activity/v1/review-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yp = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/activity/v1/save-user-tmp-data",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Np = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/apk/v1/list-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-award/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-bundle/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-list/v1/by-app-ids",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-list/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mp = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-list/v1/get-first-kill",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , es = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-moment/v1/rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ts = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-news/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , as = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-product/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , os = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-rating/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ps = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-rating/v1/items",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ss = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-search/v1/by-developer",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-search/v1/by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , is = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-search/v1/recent-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-search/v1/sug-apps-by-kw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ns = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-search/v1/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ms = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-search/v2/placeholder",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ds = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-tag/v1/by-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/delete-recruit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/delivery",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/delivery-by-link",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ls = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/recruit",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/recruit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ts = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/recruit-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/recruit-on-pc",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , us = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-test/v1/test-by-link",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-top/v2/hits",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ws = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-widget/v1/multi-get-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ys = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-wishlist/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ws = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-wishlist/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , js = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app-wishlist/v1/list-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Es = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app-wishlist/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/actions",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Us = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/auto-follow-console-game",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Os = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/button-flag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ps = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/button-flag",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ks = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/button-flag-all-platforms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ss = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/button-flag-all-platforms",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ls = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/game-number",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , As = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/game-number/delivery-for-hoverboard",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/game-sign",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/general-privacy-policy",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ds = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/in-app-event",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/level-like",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Is = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/level-like-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _s = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/mini-multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xs = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/mini-multi-get",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/multi-get-full-platform",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/multi-get-test",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Js = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/multi-get-test-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/multi-get-user-reserve-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $s = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/recommend",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ks = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/reserve-count",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ys = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/selling-products",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ns = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/test",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/videos",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/whats-new",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/widget-card",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qs = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v1/with-signature",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ms = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v2/button-flag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , er = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v2/button-flag",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , tr = ({id: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/app/v2/detail-by-id/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , ar = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v2/videos",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , or = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v2/whats-new",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v3/button-flag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v3/creators-hub",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v3/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ir = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v4/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v5/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v5/information",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/app/v6/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/auth/v1/callback-first-party",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , br = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/auth/v1/callback-for-accounts",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/auth/v1/login",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/auth/v1/signout",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/activity_cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/all_activity_cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/check_in_cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/delete_activity",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ur = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/homepage",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/index",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/benefits_center/v1/joined_activity_cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/bifrost/v1/issue-token",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/blacklist/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/blacklist/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Er = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/blacklist/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/checkin",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ur = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/checkin-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Or = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/daily-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/event-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/top-events",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/unpopular-new-events",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/calendar/v1/upcoming",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ar = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/add",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/checkout",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Br = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/preview-selection",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ir = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/submit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _r = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/update-checkout-quantity",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/update-group-discount",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/update-quantity",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/update-sku",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Jr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cart/v1/update-wallet-deduct",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/category/v1/get-tabs",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $r = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/accelerate",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/accelerator-history",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/activity-card-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nr = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/activity-period-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/cancel-hangup",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/cancel-start",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Zr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/change-default-node",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/draw-activity-period",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Mr = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/draw-period",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ei = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/draw-welfare",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ti = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/exchange-period",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ai = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/exchange-period-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/exit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/exit-demo",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , si = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/exit-slice",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ri = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/hangup",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ii = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/login-promotion",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ni = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/node-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/node-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , di = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/notice",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/pc-app-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ci = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/pc-time-history",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/prepare",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , li = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/prepare-slice",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Vi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/rec-app-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ti = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/refresh-period",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/refresh-token",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ui = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/start",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/start-demo",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/start-slice",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/time-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/time-history",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ji = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/vip-checkout",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ei = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/vip-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/vip-guide",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ui = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-game/v1/welfare",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Oi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/cloud-save/v1/delete-by-app",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Pi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/cloud-save/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ki = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/code-direct-delivery/v1/deliver",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Si = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/code-direct-delivery/v1/manual-deliver",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Li = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/code-direct-delivery/v1/role-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ai = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/code-direct-delivery/v1/server-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ci = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v1/rec-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Di = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v1/rec-post",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ii = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec-banner",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _i = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec-by-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec-detail-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ji = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/collection/v2/rec-detail-moment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ri = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/comment/v1/by-object",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $i = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/complaint/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ki = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/complaint/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/complaint/v2/appeal",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ni = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/complaint/v2/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/config/v1/decide-region",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/config/v1/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/config/v3/terms",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qi = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/console-game/v2/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mi = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/button-with-device",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ev = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/button-with-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , tv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/detail-by-id",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , av = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ov = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/rec-feed",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/recommend",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , rv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/vote-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , iv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v1/whats-new",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/craft/v2/rec-feed",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/by-comment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/by-post",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/create-child",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/comment/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Vv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/favorite/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/favorite/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/favorite/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , uv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/favorite/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/favorite/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/post-draft/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post-draft/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post-draft/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/post-draft/v1/get-update",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ev = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post-draft/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Uv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ov = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/get-create",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/get-update",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/publish",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/translate",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Av = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v1/update-published-time",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/post/v2/publish",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creation/vote/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creation/vote/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Bv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator-activity/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Iv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator-activity/v1/preview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _v = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/activities",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/app-activities",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/apply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/apply-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/bind-alipay",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rv = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/contact",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $v = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/contribute-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/contribute-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/creator-weekly-report",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/hot-hashtags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/income-by-contribute",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/income-by-date",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/income-summary",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mv = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/invitation",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , en = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/invitation-accept",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , tn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/invitation-decline",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , an = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/join-offsite-incentive",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , on = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/lab",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/landing",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/moment-rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/moment-rec-tab",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/offsite-income-by-date",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/onsite-income-by-date",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/radar-chart",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/rules",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/stats-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v1/stats-summary",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v2/contribute-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ln = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v2/contribute-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v2/landing",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/creator/v2/moment-rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/area-children",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , un = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/bind-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/bind-game-account",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/create-by-game-record",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/list-by-sku",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , En = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/list-for-market",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/parse-from-text",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Un = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/role-detail",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , On = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/role-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/server-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/set-default",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ln = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v2/delete-general",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , An = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v2/list-by-userid",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delivery-address/v2/save-general",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/create-password-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-ammo-package-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-combat-readiness-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , In = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-combat-readiness-map",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _n = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-daily-password",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-produce-market",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-rat-attack-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/get-rat-attack-map",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/list-password-codes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/delta-force/v1/mark-password-code-invalid",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $n = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/developer-top/v1/hits",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/developer/v1/action",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/developer/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/developer/v1/recommend-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discount/v1/coupon-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discount/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zn = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discount/v1/list-coupon",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/discount/v1/multi-receive-discounts",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Mn = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/discount/v1/receive",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , em = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discover-categories/v1/feed-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discover-categories/v1/feed-terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , am = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discover-categories/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , om = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/discover-categories/v1/set-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discover-categories/v2/feed-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discover/v1/genres",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/discover/v1/rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , im = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/dislike/v1/create-with-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , vm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/dislike/v1/delete-with-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/emoji/v1/default-groups",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/epic/v1/claim-coupon",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/epic/v1/coupon-games",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/epic/v1/free-promotion-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/epic/v1/received-coupons",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/epic/v1/save-tokens",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/card_collection/redeem_award",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Vm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/card_collection/redeem_award_info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/card_collection/redeem_award_info",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gm = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/card_collection/redeem_award_logs/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , um = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/check_in",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/check_in_accept_award",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wm = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/detail/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , ym = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/dynamic_data/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , Wm = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/get_my_award_list/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , jm = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/livelink_bind_info/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , Em = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/livelink_game_grant/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , Gm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/v2/card-collection/redeem-award",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Um = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/v2/check-in-accept-award",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Om = ({code: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/event/game-sign/v2/my-award-list/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , Pm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/event/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , km = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/event/v1/discount-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/example/v1/say-hello",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Am = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v2/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Im = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v2/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _m = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v2/clear-invalid",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v2/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v2/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/favorite/v2/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v1/by-map-point",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/by-group",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $m = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/by-group-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Km = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ym = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nm = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/del-hashtag",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/for-frequent-visit",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/hashtag-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/list-with-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/list-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mm = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/terms-with-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ed = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/terms-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , td = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/top-to-profile",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ad = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/treasure-apply-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , od = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/video-rec1-with-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v6/video-rec1-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/by-group",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/by-group-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , id = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/by-hashtag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , md = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/for-app-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/for-frequent-visit",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/list-with-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/list-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/video-rec1-with-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ld = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v7/video-rec1-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feed/v8/by-hashtag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Td = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/app-ratings",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/app-top",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ud = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/by-category",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/by-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/following",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ed = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v1/for-you",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v2/by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ud = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v2/for-you",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Od = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/feeds/v3/by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/file/v1/document-convert",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-feed-search/v1/by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-friendship/v1/recommend",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ld = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-friendship/v1/recommend-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ad = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-level/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-level/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-level/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-level/v1/multi-get-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/dashboard-cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Id = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/dashboard-chart",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _d = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/dashboard-export",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/del-group-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/del-silence",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/down-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-check-external-link",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $d = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-moment-create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Nd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-moment-delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-moments-weight-update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-entity-update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Zd = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qd = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-preview",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Md = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , eb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-update-logs",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ab = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/game-guide-update-logs-export",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ob = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-app-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-label-delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , sb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-label-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-label-save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ib = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-label-set-offline",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , vb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-recommend-delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-recommend-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-recommend-save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , db = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-user-apply-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-user-init",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-user-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-user-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/group-user-stats-export",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/init-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/log-init",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/log-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ub = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-del",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-down",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-feedback-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-list-by-url",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-move",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Eb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/multi-unlink-group",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/player-voice-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ub = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-agreement-list",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ob = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-batch-polish-reply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Pb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-check-agreement",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-create-prompt-template",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-delete-prompt-template",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Lb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-get-polish-progress",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ab = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-get-prompt-template-list",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-get-selected-reply-text",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cb = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Db = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-moment-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-reply-commit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ib = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-reply-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _b = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-reply-generate",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-reply-preview",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-save-edited-answer",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-sign-agreement",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Jb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-sign-oss-token",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-update-agg-question-no-need-reply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $b = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-update-moment-batch-no-need-reply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-update-prompt-template",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Yb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-update-supplement-text",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Nb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-upload-oss-file-record",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-validate-operation",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/question-view-supplement-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Zb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/save-group-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/set-apply-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Mb = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/set-group-user-apply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ec = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/silence-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/un-down",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ac = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v1/user-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v2/multi-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum-management/v2/multi-list-by-url",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum/v1/config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum/v1/official-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ic = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum/v1/permissions-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum/v1/recent-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/forum/v1/recent-groups",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/friend/v1/set-alias",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friend/v2/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friend/v2/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/app-group",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Vc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/fans-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/fans-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/fans-for-hoverboard",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/following-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/following-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/following-user-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/friend-for-hoverboard",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/hoverboard-game-invite",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/friendship/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ec = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/gacha-record/v1/app-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/gacha-record/v1/record-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Uc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/gacha-record/v1/upload-data",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Oc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/complaint-menu",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/complaint-upload",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/guide-collection",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/guide-entity-collection-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/guide-entity-collection-preview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ac = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/guide-entity-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/landing",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/landing-preview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-guide/v1/regulation-landing-preview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/album-data-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ic = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/auto-chess-filter",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _c = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/auto-chess-hero-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/auto-chess-match-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/basic-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/battle-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/battle-records",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/bind-livelink-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $c = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/bind-role",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/bind-role-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yc = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/bind-tokenlink-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Nc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/card-list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/card-list-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/character-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/collection-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/data-board",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mc = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/detail-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/detail-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , th = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/display-album-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ah = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/gacha-record-refresh",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , oh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/gacha-record-summary",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ph = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/get-first-party-role-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/get-third-role-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/grid-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ih = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/impression-options",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/impressions",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/list-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/login-by-verification-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/module-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/refresh",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ch = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/role-profile",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/save-display-album-data",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/send-verification-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Vh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Th = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v1/user-impression-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v2/card-list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-record/v2/card-list-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/activity/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/activity/v1/tools",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/third-party-tool/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/all-tools",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/app-tools",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Eh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/common-tools/pinned",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/home",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Uh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/my-common-tools",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Oh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/report-tool",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ph = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/game-tool/v1/search-tools",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/gate/v1/rec2",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/gate/v3/categories",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/gate/v3/feed",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ah = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/gate/v3/rec1",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/general-vote/v1/status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ch = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/general-vote/v1/vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-honor/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/group-honor/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ih = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-label/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _h = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-label/v2/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-search/v1/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-search/v2/by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-search/v3/by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/group-silence/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/group-silence/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $h = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group-silence/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/add-user-visit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Yh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/detail-for-hoverboard",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qh = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/edit-team-card",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/hot-app-group",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/hot-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mh = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/recommend",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , e1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/recommend-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , t1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/recommend-for-moment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , a1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/team-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , o1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/team-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , p1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/group/v1/user-team-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , s1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/groups/game",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , r1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/groups/official",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , i1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag-search/v1/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , v1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag-search/v2/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , n1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/activity-hashtags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , m1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , d1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , b1 = ({name: e, ...t}, a={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/detail-by-name/".concat(e),
    method: "GET",
    query: t,
    format: "json",
    params: a
})
  , c1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/get-circle-personal-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , h1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/hot-hashtag-red-dot",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , l1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/hot-hashtags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , V1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/join-circle-hashtag",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , T1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , g1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/multi-get-all",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , u1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v1/tabs",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , f1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v2/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , w1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v2/detail-by-name",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , y1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hashtag/v2/hot-hashtags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , W1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/history/v1/create-with-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , j1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/history/v1/delete-with-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , E1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/history/v2/list-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , G1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/create-lucky-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , U1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/create-password-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , O1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/follow-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , P1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-heroes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , k1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-hok-daily-report",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , S1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-recommend-users",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , L1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-tags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , A1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-user-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , F1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-user-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , C1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/get-visible-users",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , D1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/hok-binding-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , B1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/hok-daily-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , I1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/list-lucky-codes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/list-password-codes",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , x1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/mark-lucky-code-invalid",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , H1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/mark-password-code-invalid",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , z1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/report-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , J1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/report-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , R1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/send-match-chat",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/update-user-info",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , K1 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/hok/v1/user-event",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Y1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v2/get-user-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , N1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v2/hok-daily-report",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Q1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hok/v2/pre-daily-report",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , X1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/horizontal-line/v1/default",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Z1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hot-topic/v1/awards-by-group",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , q1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/hot-topic/v1/awards-years",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , M1 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app-list/v1/by-developer",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , el = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app-list/v1/by-rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app-search/v2/recent-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , al = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app-top/v1/hits",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ol = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app-top/v2/hits",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app/v1/action-item",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/app/v1/action-item",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , rl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app/v1/event",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , il = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app/v1/mini-multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app/v4/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/app/v5/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ml = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/collection/v2/rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/collection/v2/rec-by-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/collection/v2/rec-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/collection/v2/rec-detail-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/collection/v2/rec-detail-post",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ll = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/admin-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/change-top-post-sort",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Tl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/create-admin",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/create-sidebar",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ul = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/delete-admin",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/delete-sidebar",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/edit-hashtag-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/edit-sidebar",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/hashtag-top-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/post-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , El = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/post-top-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/set-hashtag-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ul = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/set-top-post",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ol = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/sidebar-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/unset-hashtag-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/unset-top-post",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sl = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/community-center/v1/update-top-post",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ll = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/dailies/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Al = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/discover/v1/home",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/discover/v1/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/editor/v1/review-ideas",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-nomination/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-nomination/v1/leaderboard",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Il = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-nomination/v1/nominations",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _l = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-nomination/v1/vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-vote/v1/candidates",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-vote/v1/leaderboard",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer-vote/v1/reviews",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/explorer/v1/home",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/hashtag/v1/app-top",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $l = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/hashtag/v1/get-by-ids",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/hashtag/v1/search",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/hashtag/v1/suggest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/holiday/v1/guide",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ql = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/holiday/v1/home",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/holiday/v1/lottery",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zl = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/holiday/v1/record-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ql = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/holiday/v1/sign",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ml = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/home/v1/app-tags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/app-tags",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/gamer-role",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , aV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/rec-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/rec-related",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/set-app-tags",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , sV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/set-gamer-role",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , rV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/interest/v1/set-rec-list",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , iV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/library/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/app-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/final-prize-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/finish-share-task",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/get-free-period",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/home",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/invited",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/share",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/ticket-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , VV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/ticket-rank",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , TV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/trial-play-submit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/playfest/v1/vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , uV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/post-gamelist/v1/make-cover",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/release-live/v1/home-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/release-live/v1/subscribe",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/routing/v1/redirect-web-url",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , WV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/app-by-kw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/history-clear",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , EV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/history-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , GV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/history-list-for-device",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , UV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/history-sync",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , OV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/intro",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , PV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/mix-by-kw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/placeholder",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , SV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/post-by-kw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , LV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/post-sug-by-kw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , AV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/trending",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , FV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/search/v2/user-by-kw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , CV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/sidebar/v1/link-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , DV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/sidebar/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , BV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/top/v1/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , IV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/top/v3/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _V = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/user-app-status/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/user-app-status/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , HV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/i/user-app-status/v1/get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/user-app-status/v1/publish-save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , JV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/i/user-app-status/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , RV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/illegal-ugc/v1/get-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $V = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/button",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , KV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/cancel-gift-code-preselect-role",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , YV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/delete-reserve",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , NV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , QV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/is-current",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , XV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/preview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ZV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/reserve",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qV = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/in-app-event/v1/set-gift-code-preselect-role",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , MV = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/landing/v5/timeline-with-guest",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , e2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/landing/v5/timeline-with-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , t2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/landing/v7/timeline",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , a2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/leaderboard/v1/friend-scores",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , o2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/leaderboard/v1/list-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , p2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/leaderboard/v1/overview-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , s2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/leaderboard/v1/overview-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , r2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/leaderboard/v1/save-vote",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , i2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/leaderboard/v1/top-scores",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , v2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/link/v1/features",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , n2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/link/v1/shorturl",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , m2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/link/v2/features",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , d2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/red-packet/v1/get-user-lucky-draw",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , b2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/red-packet/v1/info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , c2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/red-packet/v1/join-lucky-draw",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , h2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/red-packet/v1/lucky-draw-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , l2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/add-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , V2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/audience-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , T2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/block-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , g2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/comment-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , u2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , f2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/current-prize-result",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , w2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/current-product",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , y2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/current-red-pack",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , W2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/delete-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , j2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , E2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/get-bifrost-token",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , G2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/get-prize-address",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , U2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/gift-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , O2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/mute-user",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , P2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/online",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , k2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/pending-live-plans",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , S2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/prize-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , L2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/prize-result",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , A2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/product-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , F2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/receive-red-pack",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , C2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/save-prize-address",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , D2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/save-sensitive-word",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , B2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/sensitive-word",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , I2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/subscribe",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/subscribe-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , x2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/live-event/v1/unsubscribe",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , H2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/maker/v1/app-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , z2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/maker/v1/test-plan-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , J2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/map/point/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , R2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/map/point/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/map/point/v1/get-group-label",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , K2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/map/point/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Y2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/map/point/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , N2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/map/point/v1/update-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Q2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/map/user/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , X2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/map/user/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Z2 = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/map/user/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , q2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/app-search/by-keywords",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , M2 = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/community-overview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/forum-contents",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/review-overview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , aT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/reviews",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/reviews/like",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/reviews/reply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , sT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/store-overview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/current-app/store-snapshot",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , iT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mcp/v1/test-plan-pc-package",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mention/v1/candidates",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/clear-thread-unread",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , mT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/delete-by-participant",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/inbox-by-users",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/quick-message-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , VT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/say-hi",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , TT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/say-hi/accept",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/send",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , uT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/share",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , fT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/message/v1/thread-unread",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/miniapp/v1/privacy",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/miniapp/v1/template-share-page",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , WT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mix-search/v1/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/mix-search/v2/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ET = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/by-comment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , GT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/by-moment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , UT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/close-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , OT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , PT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/create-child",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ST = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , LT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/mark-helpful",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , AT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/open-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , FT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/qa-helper-card",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , CT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/set-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , DT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , BT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/un-hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , IT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/un-set-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _T = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/un-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-comment/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , HT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-draft/v1/by-me-topic",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-draft/v1/create-topic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , JT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-draft/v1/delete-topic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , RT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-draft/v1/detail-topic",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $T = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-draft/v1/publish-topic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , KT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment-draft/v1/update-topic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , YT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-mini/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , NT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-rec/v1/relate",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , QT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-rec/v2/relate",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , XT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment-rec/v3/relate",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ZT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/game-demo/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qT = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/game-demo/v1/record",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , MT = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v1/get-guide-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v1/record-guide-status",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , tg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v1/set-noti",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ag = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v2/analytics",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , og = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v2/apply-treasure",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v2/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v2/get-update",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v2/repost",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ig = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v2/reposts",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/analytics",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ng = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/apply-treasure",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , mg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/cancel-publish",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/close-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/contribute",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/create-topic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/down",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Tg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/elite",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/get-create-repost",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ug = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/get-create-topic",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/get-create-topic-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/get-create-topic-forum-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/get-create-topic-v2",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/get-update-topic",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/grant-maker-credit",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Eg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/group-label-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ug = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/manage-feedback",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Og = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/multi-move-label",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Pg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/official",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/open-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/post-recognized",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Lg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/publish-time",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ag = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/set-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/treasure",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Bg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-down",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ig = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-elite",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _g = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-group-label-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-official",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-post-recognized",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Jg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-set-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-top",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $g = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/un-treasure",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/unlink-group",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Yg = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/moment/v3/update-topic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ng = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/agg-search",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/app-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Xg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/app-detail-collection",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/award/collection-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/collection-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mg = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/content-collection-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/content-related",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/developer/collection-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , au = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/game-collection-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ou = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/i/content-related",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/index",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , su = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/related-text-link-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ru = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/msite/v1/search-guide",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , iu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification-task/v1/landing-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/delete-by-sender",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , mu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/delete-inbox-by-sender",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , du = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/generate-recent-summary",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/get-bifrost-token",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/get-recent-summary",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/inbox-by-sender",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/mark-read",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Vu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/mark-read-all",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Tu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/set-inbox-pinned",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/set-notice-vars",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , uu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/subscription-qrcode",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v1/unread-total",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v2/by-inbox",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v2/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v2/by-platform",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ju = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v2/important-message",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Eu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/notification/v2/unread-total",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/offline-events/v1/card",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Uu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/bundle-by-me",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ou = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/by-me",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ku = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/by-payment-id",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Su = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/cancel",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Lu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/confirm-receipt",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Au = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/delivery-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/get-for-client",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Du = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/list-by-sku-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Iu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/list-carrier",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _u = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/negotiation-records",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/one-click-pay",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/payment-notify",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/redeem-code-by-me",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ju = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/refund",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ru = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/refund-cancel",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $u = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/refund-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ku = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/refund-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/refund-reasons",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/refundable-items",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/save-refund-apply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/stock-by-me",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Zu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/submit-refund-logistic",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qu = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/unpaid-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mu = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/order/v1/update-delivery-address",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ef = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v2/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/order/v3/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , af = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/pandora/v1/fuse-app-role",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , of = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/authorize",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/cancel",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , sf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/inquiry",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/params",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/pay",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/payments",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , mf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/checkout/v1/payments-config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , df = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/checkout",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/confirm-order",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/create-order",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/delete-payment-method",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/detail-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/filter-bar",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/get-order",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/get-region",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ff = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/list-payment-method",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/list-regions",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/pay-order",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Wf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/qrpay-qrcode",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/qrpay-qrcode-with-stock",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ef = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/qrpay-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/refund-apply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Uf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/refund-cancel",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Of = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/refund-reason",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v1/update-region",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v2/delete-payment-method",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v2/detail-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v2/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Af = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/order/v2/list-payment-method",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ff = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/v1/payments",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/v1/product-payments",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Df = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/payment/v1/settings/card/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Bf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/payment/v1/settings/cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , If = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/download",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _f = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/rank-terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/rec",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/rec-tag",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pc-game/v1/whats-new",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $f = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/pc-package/v1/detail",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pending-review/v1/activities",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pending-review/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Nf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/pending-review/v1/close-overview",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qf = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/pending-review/v1/delete-app",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/pending-review/v1/overview",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/post/v1/by-post",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/post/v2/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mf = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/post/v2/by-moment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ew = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/post/v3/by-topic",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/present/delete-reserve",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , aw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/present/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ow = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/present/lottery",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/present/my-prize-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/present/reserve",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , rw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/present/reserve-app-record",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , iw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/present/share-page",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , vw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/present/use-all-special-prize",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/app-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/calc-price",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/checkout",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/list-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/snapshot-by-order",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/stock-by-sku",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v1/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/product/v2/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/professional-reviews/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/professional-reviews/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ww = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/puzzle/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/recent-visit/v1/add",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ww = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/recent-visit/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/recent-visit/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ew = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/recent-visit/v1/set-sticky",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/redeem-code/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Uw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/redeem-code/v1/shared",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ow = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/reserve/v1/auto-download",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/reserve/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/reserve/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/reserve/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Lw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/reserve/v1/multi-create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Aw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/by-review",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Cw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Dw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Bw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/set-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Iw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/un-hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , _w = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/unset-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-comment/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Jw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Rw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $w = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v1/publish",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Kw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Yw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review-draft/v3/publish",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Nw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/actions",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/admin-collapse",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/ai-summary",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/ai-summary-feedback",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qw = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/by-developer",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mw = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/close-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ey = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/create-editor-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ty = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ay = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , py = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/history-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/init-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ry = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/list-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , iy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/open-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , vy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/recommend-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ny = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/set-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , my = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/trend",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , by = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/un-hidden",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/unset-show-sensitive-words",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v1/update-editor-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ly = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/by-app-summary",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/change-log",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ty = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/history-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/list-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/list-by-product",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/recommend-by-app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v2/update-editor-data",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/review/v3/change-log",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ey = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v3/close-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Gy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v3/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Uy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v3/open-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Oy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/review/v3/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Py = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/routing/v1/redirect",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ky = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/routing/v1/redirect-web-url",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Sy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/search-history/v1/clear",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ly = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/search-history/v1/sync",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ay = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v1/personal-count",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Fy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v2/app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v2/community",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v2/mix",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , By = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v2/placeholder",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Iy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v2/user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _y = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v3/agg-search",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v3/intro-by-device",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Hy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v3/intro-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v3/placeholder",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v4/agg-search",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ry = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v4/intro-by-device",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $y = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v4/intro-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ky = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v4/placeholder",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Yy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/search/v5/agg-search",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ny = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/search/v6/agg-search",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Qy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/send-file/v1/image-upload-report",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/send-file/v1/image-upload-token",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Zy = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/send-file/v1/private-image",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qy = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/send-file/v1/upload-image-by-url",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , My = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/share/v1/create-share-command",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , eW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/share/v1/get-share-command-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/share/v2/get-share-command-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , aW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/sidebar/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/sidebar/v2/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/apply",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , sW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/cancel",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , iW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , vW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/get-game-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/get-game-stats-configs",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/my-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/my-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/remove",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/review",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/signup/v1/users",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , VW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/add-to-wishlist",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , TW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/binding-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/friend-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/profile",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/redeem-cdk",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , wW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/remove-from-wishlist",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/search-friend",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , WW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/sync-data",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/user-achievement-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , EW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/user-game-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , GW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/user-game-distribution",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , UW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/user-game-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , OW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/steam/v1/user-game-list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , PW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/strategy-station/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/check-livelink-bind",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , SW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/draw-lottery",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , LW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/has-new-invitation",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , AW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/history-lottery",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , FW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/invitation-help",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , CW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/lottery-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , DW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/my-invitation-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , BW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/my-invitation-users",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , IW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/take-lottery",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _W = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/summer-activity/v1/user-invitation-code",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/survey/v1/create-answer-session",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , HW = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/survey/v1/published",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/survey/v1/save-draft-answer",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , JW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/survey/v1/submit-answer",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , RW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/tag/v1/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $W = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/tag/v2/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , KW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/agree",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , YW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/app_allow_list",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , NW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/complete-upload-package",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , QW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , XW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/create-draft",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ZW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/create-package",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/create-package-from-github",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , MW = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/create-version",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ej = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/get-package",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , aj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/github-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/list_by_app",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/third-party-tool-dev/v1/permission",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , rj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/top/v1/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , ij = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/top/v2/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/top/v3/terms",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , nj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/activity",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/address",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/address",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/export-users",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/get-conditions",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , hj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/pre-upload",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Vj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-lottery/v1/users",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Tj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-search/v1/hot",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-search/v1/suggest-by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic-search/v2/by-keyword",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/topic/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug-ai-evaluate/v1/gen-user-game-summary",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug-ai-evaluate/v1/get-user-game-info-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Wj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/ai_template/generate",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/ai_template/pre_sign",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Ej = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/ai_template/query",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Gj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/chaoziran/v1/user-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Uj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/chaoziran/v1/weekly-report",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Oj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/gameoutpost/v1/get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Pj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/delete_cards",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , kj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/delete_roco_team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Sj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/dex/sprites_detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Lj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/dex/sprites_list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Aj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/fav_roco_team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Fj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/get_cards",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Cj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/get_roco_fav_teams",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Dj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/get_roco_my_teams",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Bj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/get_roco_team_detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Ij = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/get_roco_teams",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _j = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/like_roco_team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , xj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/post_cards",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Hj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/post_roco_team",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , zj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/roco_team_config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Jj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/roco/v1/search_pets",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Rj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/sausage/v1/user-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , $j = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/sausage/v1/weekly-report",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Kj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/block",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Yj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/bonfire/start",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Nj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/bonfire/status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Qj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/bonfire/stop",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , Xj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/common-points",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Zj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/illuminate",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , qj = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/profile",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , Mj = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/profile/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , eE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/recommendations",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , tE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/sky/v1/report",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , aE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/create-match-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , oE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/create-player-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , pE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/get-game-stats",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , sE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/get-match",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , rE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/get-match-vote",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , iE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/get-player-review",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , vE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/like-comment",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/list-match-comments",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , mE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/list-matches",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , dE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/list-player-comments",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , bE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/list-players",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , cE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/list-videos",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ug/susuper/v1/vote-match",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , lE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/add-moments",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , VE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , TE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , gE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , uE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/moment-collection",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/moments",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/my-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , yE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/remove-moments",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , WE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/reorder-moments",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , jE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/update",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , EE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/ugccollection/v1/user-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , GE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/upcoming/v1/list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , UE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-annual-data/v1/2022",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , OE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-annual-data/v1/get-badge-2022",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , PE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/by-apps",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , SE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , LE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/delete",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , AE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/mark",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , FE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/my-spent-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , CE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/purchased-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , DE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/user-friends-played-games",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , BE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/user-spent-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , IE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-app/v1/works",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _E = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/basic-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , HE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , zE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/by-user-badge-id",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , JE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/by-user-badge-ids",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , RE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/cancel-wear",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , $E = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/detail-by-id",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , KE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/get-badge-by-ids",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , YE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/group-detail-by-badge",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , NE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/group-detail-by-group",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , QE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/group-list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , XE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-badge/v1/wear",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ZE = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-certification/v1/idcard",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , qE = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-profile/user-profile/v1/store",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , ME = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-profile/v1/me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , eG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-profile/v1/multi-get",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , tG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-related-app/v1/list-by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , aG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-related-app/v1/list-by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , oG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/all",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , pG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/store",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , sG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/wechat-bind-serve",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , rG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/wechat-push",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , iG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/wechat-sub-code",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , vG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/wechat-sync-from-social",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , nG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-settings/v1/wechat-unbind-serve",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , mG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/apply-group-moderator",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , dG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/apply-media",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , bG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/apply-pro",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , cG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/get-condition-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , hG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/get-status-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , lG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/group-moderator-candidates",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , VG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user-verify/v1/group-moderator-list",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , TG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/user/v1/detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , gG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/video-resource/v1/create",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , uG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/video-resource/v1/get-by-moment",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , fG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/video-resource/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , wG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/video-resource/v1/upload-token",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , yG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/video/v3/embed",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , WG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/video/v3/third-video-detail",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , jG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/video/v3/third-video-upload",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , EG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/vote/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , GG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/vote/v1/by-object",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , UG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/vote/v1/by-user",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , OG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/vote/v1/clear-invalid",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , PG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/vote/v1/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , kG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/vote/v2/multi-get",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , SG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/vote/v2/save",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , LG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/by-me",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , AG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/close-top-up",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , FG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/inquiry-top-up",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , CG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/top-up",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , DG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/top-up-info",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , BG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/top-up-qrcode",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
})
  , IG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/top-up-qrcode-status",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , _G = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/wallet/v1/transactions",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , xG = (e, t={}) => ({
    respT: {},
    path: "/webapiv2/wechat/v1/config",
    method: "GET",
    query: e,
    format: "json",
    params: t
})
  , HG = (e, t, a={}) => ({
    respT: {},
    path: "/webapiv2/wechat/v1/config",
    method: "POST",
    query: e,
    body: t,
    type: o.UrlEncoded,
    format: "json",
    params: a
});
var p = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value10000 = 1e4] = "Value10000",
e[e.Value10001 = 10001] = "Value10001",
e[e.Value10002 = 10002] = "Value10002",
e))(p || {})
  , s = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(s || {})
  , r = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(r || {})
  , i = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(i || {})
  , v = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(v || {})
  , n = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(n || {})
  , m = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(m || {})
  , d = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e))(d || {})
  , b = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(b || {})
  , c = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(c || {})
  , h = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(h || {})
  , l = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(l || {})
  , V = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(V || {})
  , T = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e))(T || {})
  , g = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(g || {})
  , u = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(u || {})
  , f = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(f || {})
  , w = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(w || {})
  , y = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e))(y || {})
  , W = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(W || {})
  , j = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(j || {})
  , E = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(E || {})
  , G = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(G || {})
  , U = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(U || {})
  , O = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value11 = 11] = "Value11",
e[e.Value12 = 12] = "Value12",
e[e.Value13 = 13] = "Value13",
e[e.Value14 = 14] = "Value14",
e[e.Value15 = 15] = "Value15",
e[e.Value16 = 16] = "Value16",
e[e.Value17 = 17] = "Value17",
e[e.Value18 = 18] = "Value18",
e))(O || {})
  , P = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(P || {})
  , k = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(k || {})
  , S = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e))(S || {})
  , L = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(L || {})
  , A = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(A || {})
  , F = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e))(F || {})
  , C = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(C || {})
  , D = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(D || {})
  , B = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(B || {})
  , I = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(I || {})
  , _ = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(_ || {})
  , x = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(x || {})
  , H = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(H || {})
  , z = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(z || {})
  , J = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(J || {})
  , R = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(R || {})
  , $ = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))($ || {})
  , K = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(K || {})
  , Y = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(Y || {})
  , N = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(N || {})
  , Q = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(Q || {})
  , X = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(X || {})
  , Z = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Z || {})
  , q = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(q || {})
  , M = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(M || {})
  , ee = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(ee || {})
  , te = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(te || {})
  , ae = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e))(ae || {})
  , oe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e[e.Value11 = 11] = "Value11",
e[e.Value12 = 12] = "Value12",
e[e.Value13 = 13] = "Value13",
e[e.Value14 = 14] = "Value14",
e[e.Value15 = 15] = "Value15",
e[e.Value16 = 16] = "Value16",
e[e.Value17 = 17] = "Value17",
e[e.Value18 = 18] = "Value18",
e))(oe || {})
  , pe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(pe || {})
  , se = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(se || {})
  , re = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(re || {})
  , ie = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e[e.Value11 = 11] = "Value11",
e[e.Value12 = 12] = "Value12",
e))(ie || {})
  , ve = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(ve || {})
  , ne = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e))(ne || {})
  , me = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(me || {})
  , de = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(de || {})
  , be = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(be || {})
  , ce = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(ce || {})
  , he = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(he || {})
  , le = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(le || {})
  , Ve = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Ve || {})
  , Te = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Te || {})
  , ge = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e))(ge || {})
  , ue = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(ue || {})
  , fe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e[e.Value11 = 11] = "Value11",
e[e.Value12 = 12] = "Value12",
e[e.Value13 = 13] = "Value13",
e[e.Value14 = 14] = "Value14",
e[e.Value15 = 15] = "Value15",
e[e.Value16 = 16] = "Value16",
e[e.Value17 = 17] = "Value17",
e[e.Value18 = 18] = "Value18",
e[e.Value101 = 101] = "Value101",
e[e.Value102 = 102] = "Value102",
e))(fe || {})
  , we = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(we || {})
  , ye = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(ye || {})
  , We = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(We || {})
  , je = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e))(je || {})
  , Ee = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(Ee || {})
  , Ge = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(Ge || {})
  , Ue = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(Ue || {})
  , Oe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(Oe || {})
  , Pe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(Pe || {})
  , ke = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(ke || {})
  , Se = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Se || {})
  , Le = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e[e.Value11 = 11] = "Value11",
e[e.Value101 = 101] = "Value101",
e))(Le || {})
  , Ae = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(Ae || {})
  , Fe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(Fe || {})
  , Ce = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(Ce || {})
  , De = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(De || {})
  , Be = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e))(Be || {})
  , Ie = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e))(Ie || {})
  , _e = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(_e || {})
  , xe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(xe || {})
  , He = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(He || {})
  , ze = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(ze || {})
  , Je = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Je || {})
  , Re = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(Re || {})
  , $e = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))($e || {})
  , Ke = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(Ke || {})
  , Ye = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(Ye || {})
  , Ne = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(Ne || {})
  , Qe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e[e.Value11 = 11] = "Value11",
e[e.Value12 = 12] = "Value12",
e[e.Value13 = 13] = "Value13",
e[e.Value14 = 14] = "Value14",
e[e.Value15 = 15] = "Value15",
e[e.Value16 = 16] = "Value16",
e[e.Value17 = 17] = "Value17",
e[e.Value18 = 18] = "Value18",
e[e.Value19 = 19] = "Value19",
e[e.Value20 = 20] = "Value20",
e[e.Value21 = 21] = "Value21",
e[e.Value22 = 22] = "Value22",
e[e.Value23 = 23] = "Value23",
e))(Qe || {})
  , Xe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Xe || {})
  , Ze = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(Ze || {})
  , qe = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(qe || {})
  , Me = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Me || {})
  , et = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e[e.Value10 = 10] = "Value10",
e[e.Value11 = 11] = "Value11",
e[e.Value12 = 12] = "Value12",
e[e.Value100 = 100] = "Value100",
e[e.Value999 = 999] = "Value999",
e))(et || {})
  , tt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(tt || {})
  , at = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(at || {})
  , ot = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e))(ot || {})
  , pt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(pt || {})
  , st = (e => (e.AppWishlist = "app_wishlist",
e.Favorite = "favorite",
e.Friendship = "friendship",
e.History = "history",
e.IntlCommunity = "intl_community",
e.Reserve = "reserve",
e.User = "user",
e.UserAppAchievement = "user_app_achievement",
e.UserAppDelivery = "user_app_delivery",
e.UserBadge = "user_badge",
e.UserForum = "user_forum",
e.UserFriendships = "user_friendships",
e.UserPlayed = "user_played",
e.UserRelatedApp = "user_related_app",
e))(st || {})
  , rt = (e => (e.Male = "male",
e.Female = "female",
e))(rt || {})
  , it = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e[e.Value7 = 7] = "Value7",
e[e.Value8 = 8] = "Value8",
e[e.Value9 = 9] = "Value9",
e))(it || {})
  , vt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(vt || {})
  , nt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(nt || {})
  , mt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(mt || {})
  , dt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e))(dt || {})
  , bt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e[e.Value6 = 6] = "Value6",
e))(bt || {})
  , ct = (e => (e.AdminManagement = "admin_management",
e.DeveloperManagement = "developer_management",
e.CommunityManagement = "community_management",
e))(ct || {})
  , ht = (e => (e.Default = "default",
e.Ad = "ad",
e.Craft = "craft",
e.InAppEvent = "in_app_event",
e.Moment = "moment",
e.MomentList = "moment_list",
e.MomentObject = "moment_object",
e.AppList = "app_list",
e.Satisfaction = "satisfaction",
e.App = "app",
e.Event = "event",
e))(ht || {})
  , lt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(lt || {})
  , Vt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(Vt || {})
  , Tt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e[e.Value4 = 4] = "Value4",
e[e.Value5 = 5] = "Value5",
e))(Tt || {})
  , gt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(gt || {})
  , ut = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e[e.Value3 = 3] = "Value3",
e))(ut || {})
  , ft = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(ft || {})
  , wt = (e => (e[e.Value0 = 0] = "Value0",
e[e.Value1 = 1] = "Value1",
e[e.Value2 = 2] = "Value2",
e))(wt || {});
export {s as ActivityGameAwardSortType, r as ActivityGameJamSortType, i as ActivityLotteryTimeSortOrder, v as ActivityMatrixtaskMatrixItemType, n as ActivityPrizeTokenLinkOrderStatus, V as ActivityTaskStatus, p as AlertId, m as ApplistGetFirstKillType, d as BenefitscenterActivityType, b as BenefitscenterGameGiftNumberType, c as ClientapiActivityvoteMyVoteRecordsDisplayType, h as ClientapiSurveyAnswerStatus, l as ClientapiSurveySurveyStatus, T as DeltaforceAmmoPackageType, g as DeltaforceAmmoType, u as DeltaforceCombatReadinessSolutionEnum, f as DeltaforceCombatReadinessSortEnum, w as DeltaforceCombatReadinessStatusEnum, y as DeltaforceCombatReadinessTabEnum, W as DeltaforcePlace, j as DeltaforceRevenueType, E as EpicReceivedCouponsRequestSource, G as ForummanagementContentType, U as GitGametaptapComProtoTaptapIemAnnotationSysAnswerItemType, O as GitGametaptapComProtoTaptapIemAnnotationSysForumQuestionListOrderBy, P as GitGametaptapComProtoTaptapIemAnnotationSysMomentItemReplyAnswerStatus, k as GitGametaptapComProtoTaptapIemAnnotationSysMomentItemStatus, S as GitGametaptapComProtoTaptapIemAnnotationSysReviewType, L as GithubComTaptapServerGenprotoGoTaptapAccountUserV1Gender, A as GithubComTaptapServerGenprotoGoTaptapAccountUserV1VerifiedSaveRequestObjType, F as GithubComTaptapServerGenprotoGoTaptapAccountUserV1VerifiedSaveRequestType, C as GithubComTaptapServerGenprotoGoTaptapAccountUserV1VerifiedTitleType, D as GithubComTaptapServerGenprotoGoTaptapAccountUserV1VerifierType, B as HokHokGender, I as HokHokLane, _ as HokHokPlatform, x as HokHokStatus, H as HokHokUserEventEnum, z as McpMcpRiskLevel, J as MiniappPrivacyContactType, R as MiniappPrivacyPersonalDataRetentionType, $ as ModelAppBundleItemPlatform, K as ModelAppButtonV3PurchaseType, Y as ModelAppDeliveryType, N as ModelAppEmulatorStatus, Q as ModelAppProductType, X as ModelAuthorizationItemType, Z as ModelAwardType, q as ModelCalendarEventLevel, M as ModelCalendarEventReservationType, ee as ModelCalendarEventType, te as ModelCalendarGameType, ae as ModelCalendarMixEventType, oe as ModelCalendarSubEventType, pe as ModelCalendarUpComingType, se as ModelCouponStatus, re as ModelCreationCategoryStyle, ie as ModelDataType, ve as ModelDeliverObjType, ne as ModelDiscountScopeType, me as ModelDiscountType, de as ModelEpicGameQuickFactContentType, be as ModelEpicPlatform, ce as ModelEpicProductType, he as ModelFriendActivityLabelLabelType, le as ModelFriendFollowStatus, Ve as ModelFutureActionType, Te as ModelGameRecordBattleRankRankType, ge as ModelGameRecordBindConfigBindMethod, ue as ModelGameRecordModuleDailyTaskTaskRewardStatus, fe as ModelGameRecordModuleType, we as ModelGameRecordTint, ye as ModelGameSetType, We as ModelGiftNumberType, je as ModelGroupBuyStatus, Ee as ModelLiveEventPrizeType, Ge as ModelLotteryAwardConditionType, Ue as ModelLuckyDrawRedPacketPlayType, Oe as ModelLuckyDrawRedPacketPrizeType, Pe as ModelMapUserPermission, ke as ModelMapUserRole, Se as ModelNotificationExtendAction, Le as ModelNotificationType, Ae as ModelPaymentGoodsType, Fe as ModelPcGameRecItemType, Ce as ModelPcPackageInstallType, De as ModelPendingReviewSource, Be as ModelProductCategory, Ie as ModelProductDeliveryAddressType, _e as ModelProductDeliveryType, xe as ModelProductRefundPolicy, He as ModelRecentNotificationSummarySectionKey, ze as ModelRecentNotificationSummaryStatus, Je as ModelRedPacketStatus, Re as ModelReviewActivityPosition, $e as ModelReviewGameRecordShowStatus, Ke as ModelReviewZuitiReason, Ye as ModelSortType, Ne as ModelStylePromptTemplate, Qe as ModelTenthAnnCard, Xe as ModelTestV2Status, Ze as ModelTestV2StatusMore, qe as ModelToolStatus, Me as ModelToolVersionStatus, et as ModelUgEventType, tt as ModelUserPinnedAppUserPinnedAppType, at as ModelUserRelatedAppType, ot as PendingreviewByMeRequestSort, pt as SearchPlaceholderV4ItemType, st as ServiceStatsObject, rt as ServiceUserprofileGender, it as ShareShareObjType, vt as SteamSyncDataRequestSource, nt as SteamSyncDataResponseSyncStatus, mt as SteamUserAchievementListRequestType, dt as SteamUserGameListByMeRequestSortBy, bt as SteamUserGameListRequestSortBy, ct as TransformerApiAppActionKey, ht as TransformerApiLandingTimelineItemType, lt as UgSusuperGameResult, Vt as UgSusuperGameStatus, Tt as UgSusuperGameType, gt as UgSusuperLikeTargetType, ut as UgSusuperMatchPhase, ft as UgSusuperVideoType, wt as UgSusuperVoteSide, jt as getWebapiv2AbtestV2GetExperiment, Et as getWebapiv2AccountProfileV1Counts, Gt as getWebapiv2AccountProfileV1Me, Ot as getWebapiv2AccountV1UserVerifies, Pt as getWebapiv2AchievementV1AppByMe, kt as getWebapiv2AchievementV1AppByUser, St as getWebapiv2AchievementV1DetailByMe, Lt as getWebapiv2AchievementV1DetailByUser, At as getWebapiv2AchievementV1ListByMe, Ft as getWebapiv2AchievementV1ListByUser, Ct as getWebapiv2AchievementV2AppByMe, Dt as getWebapiv2AchievementV2AppByUser, Bt as getWebapiv2AchievementV2ListByMe, It as getWebapiv2AchievementV2ListByMeAndApp, _t as getWebapiv2AchievementV2ListByUser, xt as getWebapiv2AchievementV2ListByUserAndApp, ua as getWebapiv2ActivityAnniversaryV1TenthDetail, fa as getWebapiv2ActivityAnniversaryV1TenthGameSpendList, wa as getWebapiv2ActivityAnniversaryV1TenthMyPrize, Ht as getWebapiv2ActivityAwardV1GetBadge2022, Wa as getWebapiv2ActivityCloudsaveConfig, ja as getWebapiv2ActivityCloudsaveGetBackupCloudsaveInfo, Ea as getWebapiv2ActivityCloudsaveGetCloudsaveInfo, zt as getWebapiv2ActivityExchangeV1Announcement, Jt as getWebapiv2ActivityExchangeV1Detail, Kt as getWebapiv2ActivityExchangeV1MyPrizeList, Yt as getWebapiv2ActivityExchangeV1PrizeList, Ua as getWebapiv2ActivityGameAwardV1CheckAppsCanVote, Oa as getWebapiv2ActivityGameAwardV1GetAppRankByKey, Pa as getWebapiv2ActivityGameAwardV1GetByYear, ka as getWebapiv2ActivityGameAwardV1GetMyVoteRecords, Sa as getWebapiv2ActivityGameAwardV1GetRankList, La as getWebapiv2ActivityGameAwardV1GetTicketDetail, Aa as getWebapiv2ActivityGameAwardV1GetTmpUserCode, Fa as getWebapiv2ActivityGameAwardV1MyVoteStatus, Ca as getWebapiv2ActivityGameAwardV1MyVotes, _a as getWebapiv2ActivityGameAwardV2GetLiveActivityAward, xa as getWebapiv2ActivityGameAwardV2GetRankList, Ha as getWebapiv2ActivityGameJamV1AppListByEvent, za as getWebapiv2ActivityGameJamV1EventDetail, Ja as getWebapiv2ActivityGameJamV1EventList, Ra as getWebapiv2ActivityGameJamV1GameMultiGet, $a as getWebapiv2ActivityGameJamV1GetCategories, Ka as getWebapiv2ActivityGameJamV1GetNominations, Ya as getWebapiv2ActivityGameJamV1GetUserRegister, Na as getWebapiv2ActivityGameJamV1RecommendGames, Xa as getWebapiv2ActivityGameJamV1ScoreLog, Za as getWebapiv2ActivityGameJamV1ScoreTotal, qa as getWebapiv2ActivityGameJamV1SearchParticipants, Ma as getWebapiv2ActivityGameJamV1UserStats, to as getWebapiv2ActivityGameJamV1UserVoteLog, Xt as getWebapiv2ActivityGroupBuyV1GetByGuest, Zt as getWebapiv2ActivityGroupBuyV1GetByHost, ao as getWebapiv2ActivityH5GameGetUserCloseGame, po as getWebapiv2ActivityImageGalleryV1Detail, so as getWebapiv2ActivityImageGalleryV1GetMyAwards, ro as getWebapiv2ActivityImageGalleryV1GetMyMoments, io as getWebapiv2ActivityImageGalleryV1GetPk, vo as getWebapiv2ActivityImageGalleryV1List, no as getWebapiv2ActivityImageGalleryV1SearchPropsCategory, mo as getWebapiv2ActivityImageGalleryV1SearchPropsItem, co as getWebapiv2ActivityInviteTeamV1GetConfig, ho as getWebapiv2ActivityInviteTeamV1GetMeTeam, lo as getWebapiv2ActivityInviteTeamV1GetTeamById, uo as getWebapiv2ActivityInviteTeamV1MyPrizeList, wo as getWebapiv2ActivityLivelinkV1Bind, Wo as getWebapiv2ActivityLivelinkV1GetActivityUrl, jo as getWebapiv2ActivityLivelinkV1GetAddress, Eo as getWebapiv2ActivityLivelinkV1GetCoinExchangeUris, Go as getWebapiv2ActivityLivelinkV1GetFlowStatus, Uo as getWebapiv2ActivityLivelinkV1GetGameData, Oo as getWebapiv2ActivityLivelinkV1GetGameTag, Po as getWebapiv2ActivityLivelinkV1GetJfCloud, ko as getWebapiv2ActivityLivelinkV1GetLotteryRecord, So as getWebapiv2ActivityLivelinkV1GetPreRole, Lo as getWebapiv2ActivityLivelinkV1LotteryCount, Fo as getWebapiv2ActivityLivelinkV1LotteryResult, _o as getWebapiv2ActivityLivelinkV1TaskResult, Ho as getWebapiv2ActivityLivelinkV2Bind, zo as getWebapiv2ActivityLivelinkV2GetAddress, Ro as getWebapiv2ActivityLotteryV1Announcement, $o as getWebapiv2ActivityLotteryV1AppLotteryList, Ko as getWebapiv2ActivityLotteryV1MultiMyPrizes, Mt as getWebapiv2ActivityLotteryV1MyRemain, Yo as getWebapiv2ActivityLotteryV1PrizeList, Qo as getWebapiv2ActivityLotteryV2MyPrizes, Xo as getWebapiv2ActivityMatrixTaskV1GetByUser, Zo as getWebapiv2ActivityMiniGameV1GetInit, qo as getWebapiv2ActivityMiniGameV1GetLeaderBoard, Mo as getWebapiv2ActivityMiniGameV1GetLegit, ap as getWebapiv2ActivityPcGameSpendTaskV1GetByUser, pp as getWebapiv2ActivityPcNewUserWelfareV1Detail, sp as getWebapiv2ActivityPresentV1TrialAppTop, rp as getWebapiv2ActivityPrizeV1GetUserPrizeDetail, ip as getWebapiv2ActivityPrizeV1GetUserPrizeTokenLink, bp as getWebapiv2ActivityRankV1SideList, cp as getWebapiv2ActivityRankV1SideScoreList, hp as getWebapiv2ActivityRankV1UserSideInfo, lp as getWebapiv2ActivityScoreV1GetMyScoreMilestonePrizes, Vp as getWebapiv2ActivityScoreV1GetScoreMilestone, ea as getWebapiv2ActivityScoreV1Log, ta as getWebapiv2ActivityScoreV1MyScoreTotal, gp as getWebapiv2ActivitySteamV1GetWishListConfig, Wp as getWebapiv2ActivityTaskV1GetInviteCodeByUser, jp as getWebapiv2ActivityTaskV1GetTasksCompletedTotal, Ep as getWebapiv2ActivityTaskV1GetUserInfoByTaskCode, Gp as getWebapiv2ActivityTaskV1GetUserInviteDetail, oa as getWebapiv2ActivityTaskV1InviteCode, pa as getWebapiv2ActivityTaskV1MultiGet, sa as getWebapiv2ActivityTaskV1MultiGetStatus, Op as getWebapiv2ActivityTeamV1GetConfig, Pp as getWebapiv2ActivityTeamV1GetMeTeam, kp as getWebapiv2ActivityTeamV1GetTeamById, Sp as getWebapiv2ActivityTeamV1GetTeamScore, Lp as getWebapiv2ActivityTeamV1GetUserScore, Ip as getWebapiv2ActivityUserAnnualDataV1Detail2023, _p as getWebapiv2ActivityUserAnnualDataV1Detail2024, xp as getWebapiv2ActivityUserAnnualDataV1Detail2025, Hp as getWebapiv2ActivityUserAnnualDataV1GetBadge, zp as getWebapiv2ActivityUserAnnualDataV1GetBadge2024, $p as getWebapiv2ActivityV1GetUserTmpData, Kp as getWebapiv2ActivityV1ReviewList, ma as getWebapiv2ActivityVoteV1Detail, da as getWebapiv2ActivityVoteV1GetVotes, ba as getWebapiv2ActivityVoteV1GetVotesStats, ca as getWebapiv2ActivityVoteV1MyVoteRecords, Np as getWebapiv2ApkV1ListByApp, Qp as getWebapiv2AppAwardV1Detail, Xp as getWebapiv2AppBundleV1Detail, Zp as getWebapiv2AppListV1ByAppIds, qp as getWebapiv2AppListV1Detail, Mp as getWebapiv2AppListV1GetFirstKill, es as getWebapiv2AppMomentV1Rec, ts as getWebapiv2AppNewsV1List, as as getWebapiv2AppProductV1Detail, os as getWebapiv2AppRatingV1ByMe, ps as getWebapiv2AppRatingV1Items, ss as getWebapiv2AppSearchV1ByDeveloper, rs as getWebapiv2AppSearchV1ByKeyword, is as getWebapiv2AppSearchV1RecentApps, vs as getWebapiv2AppSearchV1SugAppsByKw, ns as getWebapiv2AppSearchV1SuggestByKeyword, ms as getWebapiv2AppSearchV2Placeholder, ds as getWebapiv2AppTagV1ByTag, ls as getWebapiv2AppTestV1Recruit, Ts as getWebapiv2AppTestV1RecruitByMe, us as getWebapiv2AppTestV1TestByLink, fs as getWebapiv2AppTopV2Hits, Gs as getWebapiv2AppV1Actions, Os as getWebapiv2AppV1ButtonFlag, ks as getWebapiv2AppV1ButtonFlagAllPlatforms, Ls as getWebapiv2AppV1GameNumber, Fs as getWebapiv2AppV1GameSign, Cs as getWebapiv2AppV1GeneralPrivacyPolicy, Ds as getWebapiv2AppV1InAppEvent, Is as getWebapiv2AppV1LevelLikeStatus, _s as getWebapiv2AppV1MiniMultiGet, Hs as getWebapiv2AppV1MultiGetFullPlatform, zs as getWebapiv2AppV1MultiGetTest, Js as getWebapiv2AppV1MultiGetTestWithUser, Rs as getWebapiv2AppV1MultiGetUserReserveStatus, $s as getWebapiv2AppV1Recommend, Ks as getWebapiv2AppV1ReserveCount, Ys as getWebapiv2AppV1SellingProducts, Ns as getWebapiv2AppV1Test, Qs as getWebapiv2AppV1Videos, Xs as getWebapiv2AppV1WhatsNew, Zs as getWebapiv2AppV1WidgetCard, qs as getWebapiv2AppV1WithSignature, Ms as getWebapiv2AppV2ButtonFlag, tr as getWebapiv2AppV2DetailByIdId, ar as getWebapiv2AppV2Videos, or as getWebapiv2AppV2WhatsNew, pr as getWebapiv2AppV3ButtonFlag, sr as getWebapiv2AppV3CreatorsHub, rr as getWebapiv2AppV3Detail, ir as getWebapiv2AppV4Detail, vr as getWebapiv2AppV5ByMe, nr as getWebapiv2AppV5Information, mr as getWebapiv2AppV6Detail, ws as getWebapiv2AppWidgetV1MultiGetStatus, ys as getWebapiv2AppWishlistV1ByMe, js as getWebapiv2AppWishlistV1ListByUser, dr as getWebapiv2AuthV1CallbackFirstParty, br as getWebapiv2AuthV1CallbackForAccounts, cr as getWebapiv2AuthV1Login, lr as getWebapiv2BenefitsCenterV1ActivityCards, Vr as getWebapiv2BenefitsCenterV1AllActivityCards, Tr as getWebapiv2BenefitsCenterV1CheckInCards, ur as getWebapiv2BenefitsCenterV1Homepage, fr as getWebapiv2BenefitsCenterV1Index, wr as getWebapiv2BenefitsCenterV1JoinedActivityCards, Er as getWebapiv2BlacklistV1MultiGet, Ur as getWebapiv2CalendarV1CheckinDetail, Or as getWebapiv2CalendarV1DailyStatus, Pr as getWebapiv2CalendarV1EventList, kr as getWebapiv2CalendarV1TopEvents, Sr as getWebapiv2CalendarV1UnpopularNewEvents, Lr as getWebapiv2CalendarV1Upcoming, Dr as getWebapiv2CartV1List, Rr as getWebapiv2CategoryV1GetTabs, Kr as getWebapiv2CloudGameV1AcceleratorHistory, Yr as getWebapiv2CloudGameV1ActivityCardList, Nr as getWebapiv2CloudGameV1ActivityPeriodInfo, ai as getWebapiv2CloudGameV1ExchangePeriodInfo, ii as getWebapiv2CloudGameV1ListByMe, vi as getWebapiv2CloudGameV1LoginPromotion, ni as getWebapiv2CloudGameV1NodeInfo, mi as getWebapiv2CloudGameV1NodeList, di as getWebapiv2CloudGameV1Notice, bi as getWebapiv2CloudGameV1PcAppList, ci as getWebapiv2CloudGameV1PcTimeHistory, Vi as getWebapiv2CloudGameV1RecAppList, yi as getWebapiv2CloudGameV1TimeByMe, Wi as getWebapiv2CloudGameV1TimeHistory, ji as getWebapiv2CloudGameV1VipCheckout, Ei as getWebapiv2CloudGameV1VipDetail, Gi as getWebapiv2CloudGameV1VipGuide, Ui as getWebapiv2CloudGameV1Welfare, Pi as getWebapiv2CloudSaveV1ListByMe, Li as getWebapiv2CodeDirectDeliveryV1RoleList, Ai as getWebapiv2CodeDirectDeliveryV1ServerList, Fi as getWebapiv2CollectionV1Detail, Ci as getWebapiv2CollectionV1RecApp, Di as getWebapiv2CollectionV1RecPost, Bi as getWebapiv2CollectionV2Rec, Ii as getWebapiv2CollectionV2RecBanner, _i as getWebapiv2CollectionV2RecByApp, xi as getWebapiv2CollectionV2RecByTag, Hi as getWebapiv2CollectionV2RecDetail, zi as getWebapiv2CollectionV2RecDetailApp, Ji as getWebapiv2CollectionV2RecDetailMoment, Ri as getWebapiv2CommentV1ByObject, Ki as getWebapiv2ComplaintV1Detail, Qi as getWebapiv2ConfigV1DecideRegion, Xi as getWebapiv2ConfigV1Terms, qi as getWebapiv2ConsoleGameV2List, tv as getWebapiv2CraftV1DetailById, av as getWebapiv2CraftV1MultiGet, ov as getWebapiv2CraftV1RecFeed, pv as getWebapiv2CraftV1Recommend, rv as getWebapiv2CraftV1VoteByMe, iv as getWebapiv2CraftV1WhatsNew, vv as getWebapiv2CraftV2RecFeed, nv as getWebapiv2CreationCommentV1ByComment, mv as getWebapiv2CreationCommentV1ByPost, hv as getWebapiv2CreationCommentV1Detail, Vv as getWebapiv2CreationFavoriteV1ByMe, Tv as getWebapiv2CreationFavoriteV1ByUser, fv as getWebapiv2CreationFavoriteV1MultiGet, wv as getWebapiv2CreationPostDraftV1ByMe, jv as getWebapiv2CreationPostDraftV1GetUpdate, Uv as getWebapiv2CreationPostV1Detail, Ov as getWebapiv2CreationPostV1GetCreate, Pv as getWebapiv2CreationPostV1GetUpdate, Sv as getWebapiv2CreationPostV1Translate, Cv as getWebapiv2CreationVoteV1MultiGet, Bv as getWebapiv2CreatorActivityV1Detail, Iv as getWebapiv2CreatorActivityV1Preview, _v as getWebapiv2CreatorV1Activities, xv as getWebapiv2CreatorV1AppActivities, zv as getWebapiv2CreatorV1ApplyStatus, $v as getWebapiv2CreatorV1ContributeByMe, Kv as getWebapiv2CreatorV1ContributeStats, Yv as getWebapiv2CreatorV1CreatorWeeklyReport, Nv as getWebapiv2CreatorV1HotHashtags, Qv as getWebapiv2CreatorV1IncomeByContribute, Xv as getWebapiv2CreatorV1IncomeByDate, Zv as getWebapiv2CreatorV1IncomeSummary, qv as getWebapiv2CreatorV1Info, Mv as getWebapiv2CreatorV1Invitation, on as getWebapiv2CreatorV1Lab, pn as getWebapiv2CreatorV1Landing, sn as getWebapiv2CreatorV1MomentRec, rn as getWebapiv2CreatorV1MomentRecTab, vn as getWebapiv2CreatorV1OffsiteIncomeByDate, nn as getWebapiv2CreatorV1OnsiteIncomeByDate, mn as getWebapiv2CreatorV1RadarChart, dn as getWebapiv2CreatorV1Rules, bn as getWebapiv2CreatorV1StatsDetail, cn as getWebapiv2CreatorV1StatsSummary, hn as getWebapiv2CreatorV2ContributeByMe, ln as getWebapiv2CreatorV2ContributeStats, Vn as getWebapiv2CreatorV2Landing, Tn as getWebapiv2CreatorV2MomentRec, gn as getWebapiv2DeliveryAddressV1AreaChildren, un as getWebapiv2DeliveryAddressV1BindConfig, jn as getWebapiv2DeliveryAddressV1ListBySku, En as getWebapiv2DeliveryAddressV1ListForMarket, On as getWebapiv2DeliveryAddressV1RoleList, Pn as getWebapiv2DeliveryAddressV1ServerList, An as getWebapiv2DeliveryAddressV2ListByUserid, Dn as getWebapiv2DeltaForceV1GetAmmoPackageInfo, Bn as getWebapiv2DeltaForceV1GetCombatReadinessInfo, In as getWebapiv2DeltaForceV1GetCombatReadinessMap, _n as getWebapiv2DeltaForceV1GetDailyPassword, xn as getWebapiv2DeltaForceV1GetProduceMarket, Hn as getWebapiv2DeltaForceV1GetRatAttackInfo, zn as getWebapiv2DeltaForceV1GetRatAttackMap, Jn as getWebapiv2DeltaForceV1ListPasswordCodes, $n as getWebapiv2DeveloperTopV1Hits, Kn as getWebapiv2DeveloperV1Action, Yn as getWebapiv2DeveloperV1Detail, Nn as getWebapiv2DeveloperV1RecommendApps, Qn as getWebapiv2DiscountV1CouponByMe, Xn as getWebapiv2DiscountV1Detail, Zn as getWebapiv2DiscountV1ListCoupon, em as getWebapiv2DiscoverCategoriesV1FeedList, tm as getWebapiv2DiscoverCategoriesV1FeedTerms, am as getWebapiv2DiscoverCategoriesV1List, pm as getWebapiv2DiscoverCategoriesV2FeedList, sm as getWebapiv2DiscoverV1Genres, rm as getWebapiv2DiscoverV1Rec, nm as getWebapiv2EmojiV1DefaultGroups, dm as getWebapiv2EpicV1CouponGames, bm as getWebapiv2EpicV1FreePromotionInfo, cm as getWebapiv2EpicV1ReceivedCoupons, Vm as getWebapiv2EventGameSignCardCollectionRedeemAwardInfo, gm as getWebapiv2EventGameSignCardCollectionRedeemAwardLogsCode, wm as getWebapiv2EventGameSignDetailCode, ym as getWebapiv2EventGameSignDynamicDataCode, Wm as getWebapiv2EventGameSignGetMyAwardListCode, jm as getWebapiv2EventGameSignLivelinkBindInfoCode, Em as getWebapiv2EventGameSignLivelinkGameGrantCode, Om as getWebapiv2EventGameSignV2MyAwardListCode, Pm as getWebapiv2EventV1Detail, km as getWebapiv2EventV1DiscountDetail, Sm as getWebapiv2ExampleV1SayHello, Lm as getWebapiv2FavoriteV1ByMe, Am as getWebapiv2FavoriteV1ByUser, Dm as getWebapiv2FavoriteV1MultiGet, Bm as getWebapiv2FavoriteV2ByMe, Im as getWebapiv2FavoriteV2ByUser, zm as getWebapiv2FavoriteV2MultiGet, Jm as getWebapiv2FeedV1ByMapPoint, Rm as getWebapiv2FeedV6ByGroup, $m as getWebapiv2FeedV6ByGroupTag, Km as getWebapiv2FeedV6ByMe, Ym as getWebapiv2FeedV6ByUser, Qm as getWebapiv2FeedV6ForFrequentVisit, Xm as getWebapiv2FeedV6HashtagWithUser, Zm as getWebapiv2FeedV6ListWithGuest, qm as getWebapiv2FeedV6ListWithUser, Mm as getWebapiv2FeedV6TermsWithGuest, ed as getWebapiv2FeedV6TermsWithUser, ad as getWebapiv2FeedV6TreasureApplyList, od as getWebapiv2FeedV6VideoRec1WithGuest, pd as getWebapiv2FeedV6VideoRec1WithUser, sd as getWebapiv2FeedV7ByGroup, rd as getWebapiv2FeedV7ByGroupTag, id as getWebapiv2FeedV7ByHashtag, vd as getWebapiv2FeedV7ByMe, nd as getWebapiv2FeedV7ByUser, md as getWebapiv2FeedV7ForAppDetail, dd as getWebapiv2FeedV7ForFrequentVisit, bd as getWebapiv2FeedV7ListWithGuest, cd as getWebapiv2FeedV7ListWithUser, hd as getWebapiv2FeedV7VideoRec1WithGuest, ld as getWebapiv2FeedV7VideoRec1WithUser, Vd as getWebapiv2FeedV8ByHashtag, Td as getWebapiv2FeedsV1AppRatings, gd as getWebapiv2FeedsV1AppTop, ud as getWebapiv2FeedsV1ByApp, fd as getWebapiv2FeedsV1ByCategory, wd as getWebapiv2FeedsV1ByMe, yd as getWebapiv2FeedsV1ByTag, Wd as getWebapiv2FeedsV1ByUser, jd as getWebapiv2FeedsV1Following, Ed as getWebapiv2FeedsV1ForYou, Gd as getWebapiv2FeedsV2ByApp, Ud as getWebapiv2FeedsV2ForYou, Od as getWebapiv2FeedsV3ByApp, kd as getWebapiv2ForumFeedSearchV1ByKeyword, Sd as getWebapiv2ForumFriendshipV1Recommend, Ld as getWebapiv2ForumFriendshipV1RecommendByMe, Ad as getWebapiv2ForumLevelV1ByMe, Fd as getWebapiv2ForumLevelV1ByUser, Cd as getWebapiv2ForumLevelV1MultiGet, Dd as getWebapiv2ForumLevelV1MultiGetByUser, Bd as getWebapiv2ForumManagementV1DashboardCards, Id as getWebapiv2ForumManagementV1DashboardChart, _d as getWebapiv2ForumManagementV1DashboardExport, zd as getWebapiv2ForumManagementV1DownList, Jd as getWebapiv2ForumManagementV1GameGuideCheckExternalLink, $d as getWebapiv2ForumManagementV1GameGuideEntityDetail, Kd as getWebapiv2ForumManagementV1GameGuideEntityList, Zd as getWebapiv2ForumManagementV1GameGuideList, eb as getWebapiv2ForumManagementV1GameGuideStats, tb as getWebapiv2ForumManagementV1GameGuideUpdateLogs, ab as getWebapiv2ForumManagementV1GameGuideUpdateLogsExport, ob as getWebapiv2ForumManagementV1GroupAppUser, sb as getWebapiv2ForumManagementV1GroupLabelList, nb as getWebapiv2ForumManagementV1GroupRecommendList, db as getWebapiv2ForumManagementV1GroupUserApplyList, bb as getWebapiv2ForumManagementV1GroupUserInit, cb as getWebapiv2ForumManagementV1GroupUserList, hb as getWebapiv2ForumManagementV1GroupUserStats, lb as getWebapiv2ForumManagementV1GroupUserStatsExport, Vb as getWebapiv2ForumManagementV1InitData, Tb as getWebapiv2ForumManagementV1LogInit, gb as getWebapiv2ForumManagementV1LogList, yb as getWebapiv2ForumManagementV1MultiList, Wb as getWebapiv2ForumManagementV1MultiListByUrl, Gb as getWebapiv2ForumManagementV1PlayerVoiceList, Cb as getWebapiv2ForumManagementV1QuestionList, Db as getWebapiv2ForumManagementV1QuestionMomentList, Ib as getWebapiv2ForumManagementV1QuestionReplyDetail, ec as getWebapiv2ForumManagementV1SilenceList, ac as getWebapiv2ForumManagementV1UserInfo, oc as getWebapiv2ForumManagementV2MultiList, pc as getWebapiv2ForumManagementV2MultiListByUrl, sc as getWebapiv2ForumV1Config, rc as getWebapiv2ForumV1OfficialApps, ic as getWebapiv2ForumV1PermissionsByApp, vc as getWebapiv2ForumV1RecentApps, nc as getWebapiv2ForumV1RecentGroups, dc as getWebapiv2FriendV2List, bc as getWebapiv2FriendV2MultiGet, cc as getWebapiv2FriendshipV1AppGroup, Vc as getWebapiv2FriendshipV1FansByMe, Tc as getWebapiv2FriendshipV1FansByUser, gc as getWebapiv2FriendshipV1FansForHoverboard, uc as getWebapiv2FriendshipV1FollowingByMe, fc as getWebapiv2FriendshipV1FollowingByUser, wc as getWebapiv2FriendshipV1FollowingUserByMe, yc as getWebapiv2FriendshipV1FriendForHoverboard, jc as getWebapiv2FriendshipV1MultiGet, Ec as getWebapiv2GachaRecordV1AppInfo, Gc as getWebapiv2GachaRecordV1RecordInfo, Oc as getWebapiv2GameGuideV1ComplaintMenu, kc as getWebapiv2GameGuideV1GuideCollection, Sc as getWebapiv2GameGuideV1GuideEntityCollectionDetail, Lc as getWebapiv2GameGuideV1GuideEntityCollectionPreview, Ac as getWebapiv2GameGuideV1GuideEntityDetail, Fc as getWebapiv2GameGuideV1Landing, Cc as getWebapiv2GameGuideV1LandingPreview, Dc as getWebapiv2GameGuideV1RegulationLandingPreview, Bc as getWebapiv2GameRecordV1AlbumDataByMe, Ic as getWebapiv2GameRecordV1AutoChessFilter, _c as getWebapiv2GameRecordV1AutoChessHeroStats, xc as getWebapiv2GameRecordV1AutoChessMatchList, Hc as getWebapiv2GameRecordV1BasicData, zc as getWebapiv2GameRecordV1BattleDetail, Jc as getWebapiv2GameRecordV1BattleRecords, Kc as getWebapiv2GameRecordV1BindRoleConfig, Nc as getWebapiv2GameRecordV1CardListByMe, Qc as getWebapiv2GameRecordV1CardListByUser, Xc as getWebapiv2GameRecordV1CharacterDetail, Zc as getWebapiv2GameRecordV1CollectionData, qc as getWebapiv2GameRecordV1DataBoard, Mc as getWebapiv2GameRecordV1DetailByMe, eh as getWebapiv2GameRecordV1DetailByUser, th as getWebapiv2GameRecordV1DisplayAlbumData, oh as getWebapiv2GameRecordV1GachaRecordSummary, ph as getWebapiv2GameRecordV1GetFirstPartyRoleList, sh as getWebapiv2GameRecordV1GetThirdRoleList, rh as getWebapiv2GameRecordV1GridData, ih as getWebapiv2GameRecordV1ImpressionOptions, nh as getWebapiv2GameRecordV1ListData, dh as getWebapiv2GameRecordV1ModuleDetail, ch as getWebapiv2GameRecordV1RoleProfile, Vh as getWebapiv2GameRecordV1Terms, Th as getWebapiv2GameRecordV1UserImpressionList, gh as getWebapiv2GameRecordV2CardListByMe, uh as getWebapiv2GameRecordV2CardListByUser, fh as getWebapiv2GameToolActivityV1Detail, wh as getWebapiv2GameToolActivityV1Tools, yh as getWebapiv2GameToolThirdPartyToolV1Detail, Wh as getWebapiv2GameToolV1AllTools, jh as getWebapiv2GameToolV1AppTools, Gh as getWebapiv2GameToolV1Home, Uh as getWebapiv2GameToolV1MyCommonTools, Ph as getWebapiv2GameToolV1SearchTools, kh as getWebapiv2GateV1Rec2, Sh as getWebapiv2GateV3Categories, Lh as getWebapiv2GateV3Feed, Ah as getWebapiv2GateV3Rec1, Fh as getWebapiv2GeneralVoteV1Status, Dh as getWebapiv2GroupHonorV1List, Ih as getWebapiv2GroupLabelV1Detail, _h as getWebapiv2GroupLabelV2List, xh as getWebapiv2GroupSearchV1SuggestByKeyword, Hh as getWebapiv2GroupSearchV2ByKeyword, zh as getWebapiv2GroupSearchV3ByKeyword, $h as getWebapiv2GroupSilenceV1MultiGet, Yh as getWebapiv2GroupV1Detail, Nh as getWebapiv2GroupV1DetailForHoverboard, Xh as getWebapiv2GroupV1HotAppGroup, Zh as getWebapiv2GroupV1HotApps, qh as getWebapiv2GroupV1List, Mh as getWebapiv2GroupV1Recommend, e1 as getWebapiv2GroupV1RecommendByMe, t1 as getWebapiv2GroupV1RecommendForMoment, a1 as getWebapiv2GroupV1TeamConfig, o1 as getWebapiv2GroupV1TeamList, p1 as getWebapiv2GroupV1UserTeamInfo, s1 as getWebapiv2GroupsGame, r1 as getWebapiv2GroupsOfficial, i1 as getWebapiv2HashtagSearchV1SuggestByKeyword, v1 as getWebapiv2HashtagSearchV2SuggestByKeyword, n1 as getWebapiv2HashtagV1ActivityHashtags, d1 as getWebapiv2HashtagV1Detail, b1 as getWebapiv2HashtagV1DetailByNameName, c1 as getWebapiv2HashtagV1GetCirclePersonalDetail, h1 as getWebapiv2HashtagV1HotHashtagRedDot, l1 as getWebapiv2HashtagV1HotHashtags, T1 as getWebapiv2HashtagV1MultiGet, g1 as getWebapiv2HashtagV1MultiGetAll, u1 as getWebapiv2HashtagV1Tabs, f1 as getWebapiv2HashtagV2Detail, w1 as getWebapiv2HashtagV2DetailByName, y1 as getWebapiv2HashtagV2HotHashtags, E1 as getWebapiv2HistoryV2ListWithUser, P1 as getWebapiv2HokV1GetHeroes, k1 as getWebapiv2HokV1GetHokDailyReport, S1 as getWebapiv2HokV1GetRecommendUsers, L1 as getWebapiv2HokV1GetTags, A1 as getWebapiv2HokV1GetUserInfo, F1 as getWebapiv2HokV1GetUserStatus, C1 as getWebapiv2HokV1GetVisibleUsers, D1 as getWebapiv2HokV1HokBindingStatus, B1 as getWebapiv2HokV1HokDailyInfo, I1 as getWebapiv2HokV1ListLuckyCodes, _1 as getWebapiv2HokV1ListPasswordCodes, z1 as getWebapiv2HokV1ReportDetail, J1 as getWebapiv2HokV1ReportList, Y1 as getWebapiv2HokV2GetUserStatus, N1 as getWebapiv2HokV2HokDailyReport, Q1 as getWebapiv2HokV2PreDailyReport, X1 as getWebapiv2HorizontalLineV1Default, Z1 as getWebapiv2HotTopicV1AwardsByGroup, q1 as getWebapiv2HotTopicV1AwardsYears, M1 as getWebapiv2IAppListV1ByDeveloper, el as getWebapiv2IAppListV1ByRec, tl as getWebapiv2IAppSearchV2RecentApps, al as getWebapiv2IAppTopV1Hits, ol as getWebapiv2IAppTopV2Hits, pl as getWebapiv2IAppV1ActionItem, rl as getWebapiv2IAppV1Event, il as getWebapiv2IAppV1MiniMultiGet, vl as getWebapiv2IAppV4Detail, nl as getWebapiv2IAppV5Detail, ml as getWebapiv2ICollectionV2Rec, dl as getWebapiv2ICollectionV2RecByTag, bl as getWebapiv2ICollectionV2RecDetail, cl as getWebapiv2ICollectionV2RecDetailApp, hl as getWebapiv2ICollectionV2RecDetailPost, ll as getWebapiv2ICommunityCenterV1AdminList, Wl as getWebapiv2ICommunityCenterV1HashtagTopList, jl as getWebapiv2ICommunityCenterV1PostList, El as getWebapiv2ICommunityCenterV1PostTopList, Ol as getWebapiv2ICommunityCenterV1SidebarList, Ll as getWebapiv2IDailiesV1List, Al as getWebapiv2IDiscoverV1Home, Fl as getWebapiv2IDiscoverV1Terms, Cl as getWebapiv2IEditorV1ReviewIdeas, Dl as getWebapiv2IExplorerNominationV1ByMe, Bl as getWebapiv2IExplorerNominationV1Leaderboard, Il as getWebapiv2IExplorerNominationV1Nominations, Jl as getWebapiv2IExplorerV1Home, xl as getWebapiv2IExplorerVoteV1Candidates, Hl as getWebapiv2IExplorerVoteV1Leaderboard, zl as getWebapiv2IExplorerVoteV1Reviews, Rl as getWebapiv2IHashtagV1AppTop, $l as getWebapiv2IHashtagV1GetByIds, Kl as getWebapiv2IHashtagV1Search, Yl as getWebapiv2IHashtagV1Suggest, Nl as getWebapiv2IHolidayV1Guide, Ql as getWebapiv2IHolidayV1Home, Xl as getWebapiv2IHolidayV1Lottery, Zl as getWebapiv2IHolidayV1RecordByMe, ql as getWebapiv2IHolidayV1Sign, Ml as getWebapiv2IHomeV1AppTags, eV as getWebapiv2IInterestV1AppTags, tV as getWebapiv2IInterestV1GamerRole, aV as getWebapiv2IInterestV1RecList, oV as getWebapiv2IInterestV1RecRelated, iV as getWebapiv2ILibraryV1List, vV as getWebapiv2IPlayfestV1AppDetail, nV as getWebapiv2IPlayfestV1FinalPrizeInfo, dV as getWebapiv2IPlayfestV1GetFreePeriod, bV as getWebapiv2IPlayfestV1Home, hV as getWebapiv2IPlayfestV1Share, lV as getWebapiv2IPlayfestV1TicketList, VV as getWebapiv2IPlayfestV1TicketRank, fV as getWebapiv2IReleaseLiveV1HomeInfo, yV as getWebapiv2IRoutingV1RedirectWebUrl, WV as getWebapiv2ISearchV2AppByKw, EV as getWebapiv2ISearchV2HistoryList, GV as getWebapiv2ISearchV2HistoryListForDevice, OV as getWebapiv2ISearchV2Intro, PV as getWebapiv2ISearchV2MixByKw, kV as getWebapiv2ISearchV2Placeholder, SV as getWebapiv2ISearchV2PostByKw, LV as getWebapiv2ISearchV2PostSugByKw, AV as getWebapiv2ISearchV2Trending, FV as getWebapiv2ISearchV2UserByKw, CV as getWebapiv2ISidebarV1LinkByApp, DV as getWebapiv2ISidebarV1List, BV as getWebapiv2ITopV1Terms, IV as getWebapiv2ITopV3Terms, _V as getWebapiv2IUserAppStatusV1ByMe, xV as getWebapiv2IUserAppStatusV1ByUser, HV as getWebapiv2IUserAppStatusV1Get, RV as getWebapiv2IllegalUgcV1GetDetail, $V as getWebapiv2InAppEventV1Button, NV as getWebapiv2InAppEventV1Detail, XV as getWebapiv2InAppEventV1Preview, MV as getWebapiv2LandingV5TimelineWithGuest, e2 as getWebapiv2LandingV5TimelineWithUser, t2 as getWebapiv2LandingV7Timeline, a2 as getWebapiv2LeaderboardV1FriendScores, o2 as getWebapiv2LeaderboardV1ListByApp, p2 as getWebapiv2LeaderboardV1OverviewByMe, s2 as getWebapiv2LeaderboardV1OverviewByUser, i2 as getWebapiv2LeaderboardV1TopScores, v2 as getWebapiv2LinkV1Features, n2 as getWebapiv2LinkV1Shorturl, m2 as getWebapiv2LinkV2Features, d2 as getWebapiv2LiveEventRedPacketV1GetUserLuckyDraw, b2 as getWebapiv2LiveEventRedPacketV1Info, h2 as getWebapiv2LiveEventRedPacketV1LuckyDrawInfo, V2 as getWebapiv2LiveEventV1AudienceList, g2 as getWebapiv2LiveEventV1CommentList, u2 as getWebapiv2LiveEventV1Config, f2 as getWebapiv2LiveEventV1CurrentPrizeResult, w2 as getWebapiv2LiveEventV1CurrentProduct, y2 as getWebapiv2LiveEventV1CurrentRedPack, j2 as getWebapiv2LiveEventV1Detail, E2 as getWebapiv2LiveEventV1GetBifrostToken, G2 as getWebapiv2LiveEventV1GetPrizeAddress, U2 as getWebapiv2LiveEventV1GiftCode, k2 as getWebapiv2LiveEventV1PendingLivePlans, S2 as getWebapiv2LiveEventV1PrizeList, L2 as getWebapiv2LiveEventV1PrizeResult, A2 as getWebapiv2LiveEventV1ProductList, B2 as getWebapiv2LiveEventV1SensitiveWord, _2 as getWebapiv2LiveEventV1SubscribeStatus, H2 as getWebapiv2MakerV1AppList, z2 as getWebapiv2MakerV1TestPlanStatus, R2 as getWebapiv2MapPointV1Detail, $2 as getWebapiv2MapPointV1GetGroupLabel, K2 as getWebapiv2MapPointV1ListByMe, X2 as getWebapiv2MapUserV1List, q2 as getWebapiv2McpV1AppSearchByKeywords, M2 as getWebapiv2McpV1CurrentAppCommunityOverview, eT as getWebapiv2McpV1CurrentAppForumContents, tT as getWebapiv2McpV1CurrentAppReviewOverview, aT as getWebapiv2McpV1CurrentAppReviews, sT as getWebapiv2McpV1CurrentAppStoreOverview, rT as getWebapiv2McpV1CurrentAppStoreSnapshot, iT as getWebapiv2McpV1TestPlanPcPackage, vT as getWebapiv2MentionV1Candidates, bT as getWebapiv2MessageV1InboxByUsers, cT as getWebapiv2MessageV1List, hT as getWebapiv2MessageV1MultiGet, lT as getWebapiv2MessageV1QuickMessageList, fT as getWebapiv2MessageV1ThreadUnread, wT as getWebapiv2MiniappV1Privacy, yT as getWebapiv2MiniappV1TemplateSharePage, WT as getWebapiv2MixSearchV1SuggestByKeyword, jT as getWebapiv2MixSearchV2SuggestByKeyword, ET as getWebapiv2MomentCommentV1ByComment, GT as getWebapiv2MomentCommentV1ByMoment, FT as getWebapiv2MomentCommentV1QaHelperCard, HT as getWebapiv2MomentDraftV1ByMeTopic, RT as getWebapiv2MomentDraftV1DetailTopic, ZT as getWebapiv2MomentGameDemoV1List, YT as getWebapiv2MomentMiniV1MultiGet, NT as getWebapiv2MomentRecV1Relate, QT as getWebapiv2MomentRecV2Relate, XT as getWebapiv2MomentRecV3Relate, MT as getWebapiv2MomentV1GetGuideStatus, ag as getWebapiv2MomentV2Analytics, pg as getWebapiv2MomentV2Detail, sg as getWebapiv2MomentV2GetUpdate, ig as getWebapiv2MomentV2Reposts, vg as getWebapiv2MomentV3Analytics, lg as getWebapiv2MomentV3Detail, gg as getWebapiv2MomentV3GetCreateRepost, ug as getWebapiv2MomentV3GetCreateTopic, fg as getWebapiv2MomentV3GetCreateTopicConfig, wg as getWebapiv2MomentV3GetCreateTopicForumConfig, yg as getWebapiv2MomentV3GetCreateTopicV2, Wg as getWebapiv2MomentV3GetUpdateTopic, Ng as getWebapiv2MsiteV1AggSearch, Qg as getWebapiv2MsiteV1AppDetail, Xg as getWebapiv2MsiteV1AppDetailCollection, Zg as getWebapiv2MsiteV1AwardCollectionDetail, qg as getWebapiv2MsiteV1CollectionDetail, Mg as getWebapiv2MsiteV1ContentCollectionDetail, eu as getWebapiv2MsiteV1ContentRelated, tu as getWebapiv2MsiteV1DeveloperCollectionDetail, au as getWebapiv2MsiteV1GameCollectionDetail, ou as getWebapiv2MsiteV1IContentRelated, pu as getWebapiv2MsiteV1Index, su as getWebapiv2MsiteV1RelatedTextLinkList, ru as getWebapiv2MsiteV1SearchGuide, iu as getWebapiv2NotificationTaskV1LandingInfo, cu as getWebapiv2NotificationV1GetRecentSummary, hu as getWebapiv2NotificationV1InboxBySender, uu as getWebapiv2NotificationV1SubscriptionQrcode, fu as getWebapiv2NotificationV1UnreadTotal, wu as getWebapiv2NotificationV2ByInbox, yu as getWebapiv2NotificationV2ByMe, Wu as getWebapiv2NotificationV2ByPlatform, ju as getWebapiv2NotificationV2ImportantMessage, Eu as getWebapiv2NotificationV2UnreadTotal, Ou as getWebapiv2OrderV1ByMe, Fu as getWebapiv2OrderV1DeliveryStatus, Cu as getWebapiv2OrderV1GetForClient, Du as getWebapiv2OrderV1ListByMe, Bu as getWebapiv2OrderV1ListBySkuCode, Iu as getWebapiv2OrderV1ListCarrier, _u as getWebapiv2OrderV1NegotiationRecords, $u as getWebapiv2OrderV1RefundDetail, Ku as getWebapiv2OrderV1RefundList, Yu as getWebapiv2OrderV1RefundReasons, Nu as getWebapiv2OrderV1RefundableItems, qu as getWebapiv2OrderV1UnpaidByMe, ef as getWebapiv2OrderV2ByMe, tf as getWebapiv2OrderV3ListByMe, sf as getWebapiv2PaymentCheckoutV1Inquiry, rf as getWebapiv2PaymentCheckoutV1Params, mf as getWebapiv2PaymentCheckoutV1PaymentsConfig, df as getWebapiv2PaymentOrderV1Checkout, lf as getWebapiv2PaymentOrderV1DetailByMe, Vf as getWebapiv2PaymentOrderV1FilterBar, Tf as getWebapiv2PaymentOrderV1GetOrder, gf as getWebapiv2PaymentOrderV1GetRegion, uf as getWebapiv2PaymentOrderV1ListByMe, ff as getWebapiv2PaymentOrderV1ListPaymentMethod, wf as getWebapiv2PaymentOrderV1ListRegions, Ef as getWebapiv2PaymentOrderV1QrpayStatus, Of as getWebapiv2PaymentOrderV1RefundReason, Sf as getWebapiv2PaymentOrderV2DetailByMe, Lf as getWebapiv2PaymentOrderV2ListByMe, Af as getWebapiv2PaymentOrderV2ListPaymentMethod, Ff as getWebapiv2PaymentV1Payments, Cf as getWebapiv2PaymentV1ProductPayments, Bf as getWebapiv2PaymentV1SettingsCards, If as getWebapiv2PcGameV1Download, _f as getWebapiv2PcGameV1List, xf as getWebapiv2PcGameV1MultiGet, Hf as getWebapiv2PcGameV1RankTerms, zf as getWebapiv2PcGameV1Rec, Jf as getWebapiv2PcGameV1RecTag, Rf as getWebapiv2PcGameV1WhatsNew, Kf as getWebapiv2PendingReviewV1Activities, Yf as getWebapiv2PendingReviewV1ByMe, Xf as getWebapiv2PendingReviewV1Overview, Zf as getWebapiv2PostV1ByPost, qf as getWebapiv2PostV2ByMe, Mf as getWebapiv2PostV2ByMoment, ew as getWebapiv2PostV3ByTopic, aw as getWebapiv2PresentDetail, pw as getWebapiv2PresentMyPrizeList, nw as getWebapiv2ProductV1AppList, mw as getWebapiv2ProductV1CalcPrice, dw as getWebapiv2ProductV1Checkout, bw as getWebapiv2ProductV1Detail, cw as getWebapiv2ProductV1List, hw as getWebapiv2ProductV1ListByApp, lw as getWebapiv2ProductV1SnapshotByOrder, Vw as getWebapiv2ProductV1StockBySku, Tw as getWebapiv2ProductV1Terms, gw as getWebapiv2ProductV2List, uw as getWebapiv2ProfessionalReviewsV1Detail, fw as getWebapiv2ProfessionalReviewsV1List, ww as getWebapiv2PuzzleV1Detail, Ww as getWebapiv2RecentVisitV1ByMe, Gw as getWebapiv2RedeemCodeV1Detail, Uw as getWebapiv2RedeemCodeV1Shared, Ow as getWebapiv2ReserveV1AutoDownload, Pw as getWebapiv2ReserveV1ByMe, Aw as getWebapiv2ReviewCommentV1ByReview, Hw as getWebapiv2ReviewDraftV1ByMe, Rw as getWebapiv2ReviewDraftV1Detail, Nw as getWebapiv2ReviewV1Actions, Xw as getWebapiv2ReviewV1AiSummary, qw as getWebapiv2ReviewV1ByDeveloper, ey as getWebapiv2ReviewV1CreateEditorData, ay as getWebapiv2ReviewV1Detail, py as getWebapiv2ReviewV1HistoryList, sy as getWebapiv2ReviewV1InitByApp, ry as getWebapiv2ReviewV1ListByApp, vy as getWebapiv2ReviewV1RecommendByApp, my as getWebapiv2ReviewV1Stats, dy as getWebapiv2ReviewV1Trend, hy as getWebapiv2ReviewV1UpdateEditorData, ly as getWebapiv2ReviewV2ByAppSummary, Vy as getWebapiv2ReviewV2ChangeLog, Ty as getWebapiv2ReviewV2Detail, gy as getWebapiv2ReviewV2HistoryDetail, uy as getWebapiv2ReviewV2ListByApp, fy as getWebapiv2ReviewV2ListByProduct, wy as getWebapiv2ReviewV2RecommendByApp, yy as getWebapiv2ReviewV2Terms, Wy as getWebapiv2ReviewV2UpdateEditorData, jy as getWebapiv2ReviewV3ChangeLog, Py as getWebapiv2RoutingV1Redirect, ky as getWebapiv2RoutingV1RedirectWebUrl, Ay as getWebapiv2SearchV1PersonalCount, Fy as getWebapiv2SearchV2App, Cy as getWebapiv2SearchV2Community, Dy as getWebapiv2SearchV2Mix, By as getWebapiv2SearchV2Placeholder, Iy as getWebapiv2SearchV2User, _y as getWebapiv2SearchV3AggSearch, xy as getWebapiv2SearchV3IntroByDevice, Hy as getWebapiv2SearchV3IntroByUser, zy as getWebapiv2SearchV3Placeholder, Jy as getWebapiv2SearchV4AggSearch, Ry as getWebapiv2SearchV4IntroByDevice, $y as getWebapiv2SearchV4IntroByUser, Ky as getWebapiv2SearchV4Placeholder, Yy as getWebapiv2SearchV5AggSearch, Zy as getWebapiv2SendFileV1PrivateImage, eW as getWebapiv2ShareV1GetShareCommandInfo, tW as getWebapiv2ShareV2GetShareCommandInfo, aW as getWebapiv2SidebarV1List, oW as getWebapiv2SidebarV2List, sW as getWebapiv2SignupV1ByUser, vW as getWebapiv2SignupV1Detail, nW as getWebapiv2SignupV1GetGameStats, mW as getWebapiv2SignupV1GetGameStatsConfigs, dW as getWebapiv2SignupV1MyList, bW as getWebapiv2SignupV1MyStatus, lW as getWebapiv2SignupV1Users, TW as getWebapiv2SteamV1BindingStatus, gW as getWebapiv2SteamV1FriendList, uW as getWebapiv2SteamV1Profile, yW as getWebapiv2SteamV1SearchFriend, jW as getWebapiv2SteamV1UserAchievementList, EW as getWebapiv2SteamV1UserGameDetail, GW as getWebapiv2SteamV1UserGameDistribution, UW as getWebapiv2SteamV1UserGameList, OW as getWebapiv2SteamV1UserGameListByMe, PW as getWebapiv2StrategyStationV1Detail, kW as getWebapiv2SummerActivityV1CheckLivelinkBind, LW as getWebapiv2SummerActivityV1HasNewInvitation, AW as getWebapiv2SummerActivityV1HistoryLottery, CW as getWebapiv2SummerActivityV1LotteryList, DW as getWebapiv2SummerActivityV1MyInvitationCode, BW as getWebapiv2SummerActivityV1MyInvitationUsers, IW as getWebapiv2SummerActivityV1TakeLottery, _W as getWebapiv2SummerActivityV1UserInvitationCode, HW as getWebapiv2SurveyV1Published, $W as getWebapiv2TagV2ByMe, ej as getWebapiv2ThirdPartyToolDevV1Detail, tj as getWebapiv2ThirdPartyToolDevV1GetPackage, aj as getWebapiv2ThirdPartyToolDevV1GithubInfo, oj as getWebapiv2ThirdPartyToolDevV1List, pj as getWebapiv2ThirdPartyToolDevV1ListByApp, rj as getWebapiv2TopV1Terms, ij as getWebapiv2TopV2Terms, vj as getWebapiv2TopV3Terms, nj as getWebapiv2TopicLotteryV1Activity, mj as getWebapiv2TopicLotteryV1Address, hj as getWebapiv2TopicLotteryV1List, lj as getWebapiv2TopicLotteryV1PreUpload, Vj as getWebapiv2TopicLotteryV1Users, Tj as getWebapiv2TopicSearchV1Hot, gj as getWebapiv2TopicSearchV1SuggestByKeyword, uj as getWebapiv2TopicSearchV2ByKeyword, fj as getWebapiv2TopicV1Detail, yj as getWebapiv2UgAiEvaluateV1GetUserGameInfoList, Ej as getWebapiv2UgAiTemplateQuery, Gj as getWebapiv2UgChaoziranV1UserInfo, Uj as getWebapiv2UgChaoziranV1WeeklyReport, Oj as getWebapiv2UgGameoutpostV1Get, Sj as getWebapiv2UgRocoV1DexSpritesDetail, Lj as getWebapiv2UgRocoV1DexSpritesList, Fj as getWebapiv2UgRocoV1GetCards, Cj as getWebapiv2UgRocoV1GetRocoFavTeams, Dj as getWebapiv2UgRocoV1GetRocoMyTeams, Bj as getWebapiv2UgRocoV1GetRocoTeamDetail, Ij as getWebapiv2UgRocoV1GetRocoTeams, zj as getWebapiv2UgRocoV1RocoTeamConfig, Jj as getWebapiv2UgRocoV1SearchPets, Rj as getWebapiv2UgSausageV1UserInfo, $j as getWebapiv2UgSausageV1WeeklyReport, Nj as getWebapiv2UgSkyV1BonfireStatus, Xj as getWebapiv2UgSkyV1CommonPoints, qj as getWebapiv2UgSkyV1Profile, eE as getWebapiv2UgSkyV1Recommendations, pE as getWebapiv2UgSusuperV1GetGameStats, sE as getWebapiv2UgSusuperV1GetMatch, rE as getWebapiv2UgSusuperV1GetMatchVote, iE as getWebapiv2UgSusuperV1GetPlayerReview, nE as getWebapiv2UgSusuperV1ListMatchComments, mE as getWebapiv2UgSusuperV1ListMatches, dE as getWebapiv2UgSusuperV1ListPlayerComments, bE as getWebapiv2UgSusuperV1ListPlayers, cE as getWebapiv2UgSusuperV1ListVideos, gE as getWebapiv2UgccollectionV1Detail, uE as getWebapiv2UgccollectionV1MomentCollection, fE as getWebapiv2UgccollectionV1Moments, wE as getWebapiv2UgccollectionV1MyList, EE as getWebapiv2UgccollectionV1UserList, GE as getWebapiv2UpcomingV1List, UE as getWebapiv2UserAnnualDataV12022, PE as getWebapiv2UserAppV1ByApps, kE as getWebapiv2UserAppV1ByMe, SE as getWebapiv2UserAppV1ByUser, FE as getWebapiv2UserAppV1MySpentList, CE as getWebapiv2UserAppV1PurchasedByUser, DE as getWebapiv2UserAppV1UserFriendsPlayedGames, BE as getWebapiv2UserAppV1UserSpentList, IE as getWebapiv2UserAppV1Works, _E as getWebapiv2UserBadgeV1BasicByMe, xE as getWebapiv2UserBadgeV1ByMe, HE as getWebapiv2UserBadgeV1ByUser, zE as getWebapiv2UserBadgeV1ByUserBadgeId, JE as getWebapiv2UserBadgeV1ByUserBadgeIds, $E as getWebapiv2UserBadgeV1DetailById, KE as getWebapiv2UserBadgeV1GetBadgeByIds, YE as getWebapiv2UserBadgeV1GroupDetailByBadge, NE as getWebapiv2UserBadgeV1GroupDetailByGroup, QE as getWebapiv2UserBadgeV1GroupListByMe, ZE as getWebapiv2UserCertificationV1Idcard, ME as getWebapiv2UserProfileV1Me, tG as getWebapiv2UserRelatedAppV1ListByMe, aG as getWebapiv2UserRelatedAppV1ListByUser, oG as getWebapiv2UserSettingsV1All, rG as getWebapiv2UserSettingsV1WechatPush, TG as getWebapiv2UserV1Detail, cG as getWebapiv2UserVerifyV1GetConditionList, hG as getWebapiv2UserVerifyV1GetStatusList, lG as getWebapiv2UserVerifyV1GroupModeratorCandidates, VG as getWebapiv2UserVerifyV1GroupModeratorList, uG as getWebapiv2VideoResourceV1GetByMoment, fG as getWebapiv2VideoResourceV1MultiGet, yG as getWebapiv2VideoV3Embed, WG as getWebapiv2VideoV3ThirdVideoDetail, jG as getWebapiv2VideoV3ThirdVideoUpload, EG as getWebapiv2VoteV1ByMe, GG as getWebapiv2VoteV1ByObject, UG as getWebapiv2VoteV1ByUser, PG as getWebapiv2VoteV1MultiGet, kG as getWebapiv2VoteV2MultiGet, LG as getWebapiv2WalletV1ByMe, FG as getWebapiv2WalletV1InquiryTopUp, DG as getWebapiv2WalletV1TopUpInfo, IG as getWebapiv2WalletV1TopUpQrcodeStatus, _G as getWebapiv2WalletV1Transactions, xG as getWebapiv2WechatV1Config, yt as postWebapiv2AbtestV1GetExperiment, Wt as postWebapiv2AbtestV1GetMultiExperiments, Ut as postWebapiv2AccountV1SetUserVerify, Va as postWebapiv2ActivityAnniversaryGet7thShareBadge, Ta as postWebapiv2ActivityAnniversaryV1ClaimTenthScore, ga as postWebapiv2ActivityAnniversaryV1TenthCheckIn, ya as postWebapiv2ActivityCloudsaveApplySteamSave, Ga as postWebapiv2ActivityCloudsaveRestoreBackupSave, Rt as postWebapiv2ActivityExchangeV1ExchangeAndLottery, $t as postWebapiv2ActivityExchangeV1ExchangePrize, Nt as postWebapiv2ActivityExchangeV2ExchangeAndLottery, Da as postWebapiv2ActivityGameAwardV1ReceiveBadge, Ba as postWebapiv2ActivityGameAwardV1Vote, Ia as postWebapiv2ActivityGameAwardV1VoteApps, Qa as postWebapiv2ActivityGameJamV1Register, eo as postWebapiv2ActivityGameJamV1UserVote, Qt as postWebapiv2ActivityGroupBuyV1Create, qt as postWebapiv2ActivityGroupBuyV1Join, oo as postWebapiv2ActivityH5GameUploadH5GameRecord, bo as postWebapiv2ActivityInviteTeamV1CreateTeam, Vo as postWebapiv2ActivityInviteTeamV1JoinTeam, To as postWebapiv2ActivityInviteTeamV1JoinTeamForLivelink, go as postWebapiv2ActivityInviteTeamV1LeaveTeam, fo as postWebapiv2ActivityInviteTeamV1TransferTeamLeader, yo as postWebapiv2ActivityLivelinkV1CompleteTask, Ao as postWebapiv2ActivityLivelinkV1LotteryDraw, Co as postWebapiv2ActivityLivelinkV1PreCreateRole, Do as postWebapiv2ActivityLivelinkV1ProcessLotteryFlow, Bo as postWebapiv2ActivityLivelinkV1ReceiveTaskReward, Io as postWebapiv2ActivityLivelinkV1SaveAddress, xo as postWebapiv2ActivityLivelinkV1TeamLottery, Jo as postWebapiv2ActivityLivelinkV2SaveAddress, No as postWebapiv2ActivityLotteryV2Draw, ep as postWebapiv2ActivityMiniGameV1SaveUserScore, tp as postWebapiv2ActivityPcGameSpendTaskV1ClaimNewUserCoin, op as postWebapiv2ActivityPcNewUserWelfareV1Claim, vp as postWebapiv2ActivityPrizeV1SaveUserConsignee, np as postWebapiv2ActivityPrizeV2SaveUserConsignee, mp as postWebapiv2ActivityRankV1ScoreAdd, dp as postWebapiv2ActivityRankV1SideChoose, Tp as postWebapiv2ActivityScoreV1ReceiveScoreMilestonePrize, up as postWebapiv2ActivitySteamV1JoinWishList, fp as postWebapiv2ActivityTaskV1BindUserInviteCode, wp as postWebapiv2ActivityTaskV1CompleteInviteByCode, yp as postWebapiv2ActivityTaskV1CompleteInviteByUser, aa as postWebapiv2ActivityTaskV1FinishTask, ra as postWebapiv2ActivityTaskV1ReceiveReward, ia as postWebapiv2ActivityTaskV1SubmitPasscode, Up as postWebapiv2ActivityTeamV1CreateTeam, Ap as postWebapiv2ActivityTeamV1JoinActivity, Fp as postWebapiv2ActivityTeamV1JoinTeam, Cp as postWebapiv2ActivityTeamV1JoinTeamForLivelink, Dp as postWebapiv2ActivityTeamV1LeaveTeam, Bp as postWebapiv2ActivityTeamV1TransferTeamLeader, Jp as postWebapiv2ActivityUserAnnualDataV1GrantBadge, Rp as postWebapiv2ActivityUserAnnualDataV1GrantBadge2024, Yp as postWebapiv2ActivityV1SaveUserTmpData, va as postWebapiv2ActivityVoteV1Create, na as postWebapiv2ActivityVoteV1Delete, ha as postWebapiv2ActivityVoteV1Update, la as postWebapiv2ActivityVoteV1Vote, bs as postWebapiv2AppTestV1DeleteRecruit, cs as postWebapiv2AppTestV1Delivery, hs as postWebapiv2AppTestV1DeliveryByLink, Vs as postWebapiv2AppTestV1Recruit, gs as postWebapiv2AppTestV1RecruitOnPc, Us as postWebapiv2AppV1AutoFollowConsoleGame, Ps as postWebapiv2AppV1ButtonFlag, Ss as postWebapiv2AppV1ButtonFlagAllPlatforms, As as postWebapiv2AppV1GameNumberDeliveryForHoverboard, Bs as postWebapiv2AppV1LevelLike, xs as postWebapiv2AppV1MiniMultiGet, er as postWebapiv2AppV2ButtonFlag, Ws as postWebapiv2AppWishlistV1Delete, Es as postWebapiv2AppWishlistV1Save, hr as postWebapiv2AuthV1Signout, gr as postWebapiv2BenefitsCenterV1DeleteActivity, yr as postWebapiv2BifrostV1IssueToken, Wr as postWebapiv2BlacklistV1Create, jr as postWebapiv2BlacklistV1Delete, Gr as postWebapiv2CalendarV1Checkin, Ar as postWebapiv2CartV1Add, Fr as postWebapiv2CartV1Checkout, Cr as postWebapiv2CartV1Delete, Br as postWebapiv2CartV1PreviewSelection, Ir as postWebapiv2CartV1Submit, _r as postWebapiv2CartV1UpdateCheckoutQuantity, xr as postWebapiv2CartV1UpdateGroupDiscount, Hr as postWebapiv2CartV1UpdateQuantity, zr as postWebapiv2CartV1UpdateSku, Jr as postWebapiv2CartV1UpdateWalletDeduct, $r as postWebapiv2CloudGameV1Accelerate, Qr as postWebapiv2CloudGameV1CancelHangup, Xr as postWebapiv2CloudGameV1CancelStart, Zr as postWebapiv2CloudGameV1ChangeDefaultNode, qr as postWebapiv2CloudGameV1DrawActivityPeriod, Mr as postWebapiv2CloudGameV1DrawPeriod, ei as postWebapiv2CloudGameV1DrawWelfare, ti as postWebapiv2CloudGameV1ExchangePeriod, oi as postWebapiv2CloudGameV1Exit, pi as postWebapiv2CloudGameV1ExitDemo, si as postWebapiv2CloudGameV1ExitSlice, ri as postWebapiv2CloudGameV1Hangup, hi as postWebapiv2CloudGameV1Prepare, li as postWebapiv2CloudGameV1PrepareSlice, Ti as postWebapiv2CloudGameV1RefreshPeriod, gi as postWebapiv2CloudGameV1RefreshToken, ui as postWebapiv2CloudGameV1Start, fi as postWebapiv2CloudGameV1StartDemo, wi as postWebapiv2CloudGameV1StartSlice, Oi as postWebapiv2CloudSaveV1DeleteByApp, ki as postWebapiv2CodeDirectDeliveryV1Deliver, Si as postWebapiv2CodeDirectDeliveryV1ManualDeliver, $i as postWebapiv2ComplaintV1Create, Yi as postWebapiv2ComplaintV2Appeal, Ni as postWebapiv2ComplaintV2Create, Zi as postWebapiv2ConfigV3Terms, Mi as postWebapiv2CraftV1ButtonWithDevice, ev as postWebapiv2CraftV1ButtonWithUser, sv as postWebapiv2CraftV1Vote, dv as postWebapiv2CreationCommentV1Create, bv as postWebapiv2CreationCommentV1CreateChild, cv as postWebapiv2CreationCommentV1Delete, lv as postWebapiv2CreationCommentV1Update, gv as postWebapiv2CreationFavoriteV1Create, uv as postWebapiv2CreationFavoriteV1Delete, yv as postWebapiv2CreationPostDraftV1Create, Wv as postWebapiv2CreationPostDraftV1Delete, Ev as postWebapiv2CreationPostDraftV1Update, Gv as postWebapiv2CreationPostV1Delete, kv as postWebapiv2CreationPostV1Publish, Lv as postWebapiv2CreationPostV1Update, Av as postWebapiv2CreationPostV1UpdatePublishedTime, Fv as postWebapiv2CreationPostV2Publish, Dv as postWebapiv2CreationVoteV1Save, Hv as postWebapiv2CreatorV1Apply, Jv as postWebapiv2CreatorV1BindAlipay, Rv as postWebapiv2CreatorV1Contact, en as postWebapiv2CreatorV1InvitationAccept, tn as postWebapiv2CreatorV1InvitationDecline, an as postWebapiv2CreatorV1JoinOffsiteIncentive, fn as postWebapiv2DeliveryAddressV1BindGameAccount, wn as postWebapiv2DeliveryAddressV1Create, yn as postWebapiv2DeliveryAddressV1CreateByGameRecord, Wn as postWebapiv2DeliveryAddressV1Delete, Gn as postWebapiv2DeliveryAddressV1ParseFromText, Un as postWebapiv2DeliveryAddressV1RoleDetail, kn as postWebapiv2DeliveryAddressV1SetDefault, Sn as postWebapiv2DeliveryAddressV1Update, Ln as postWebapiv2DeliveryAddressV2DeleteGeneral, Fn as postWebapiv2DeliveryAddressV2SaveGeneral, Cn as postWebapiv2DeltaForceV1CreatePasswordCode, Rn as postWebapiv2DeltaForceV1MarkPasswordCodeInvalid, qn as postWebapiv2DiscountV1MultiReceiveDiscounts, Mn as postWebapiv2DiscountV1Receive, om as postWebapiv2DiscoverCategoriesV1SetTop, im as postWebapiv2DislikeV1CreateWithUser, vm as postWebapiv2DislikeV1DeleteWithUser, mm as postWebapiv2EpicV1ClaimCoupon, hm as postWebapiv2EpicV1SaveTokens, lm as postWebapiv2EventGameSignCardCollectionRedeemAward, Tm as postWebapiv2EventGameSignCardCollectionRedeemAwardInfo, um as postWebapiv2EventGameSignCheckIn, fm as postWebapiv2EventGameSignCheckInAcceptAward, Gm as postWebapiv2EventGameSignV2CardCollectionRedeemAward, Um as postWebapiv2EventGameSignV2CheckInAcceptAward, Fm as postWebapiv2FavoriteV1Create, Cm as postWebapiv2FavoriteV1Delete, _m as postWebapiv2FavoriteV2ClearInvalid, xm as postWebapiv2FavoriteV2Create, Hm as postWebapiv2FavoriteV2Delete, Nm as postWebapiv2FeedV6DelHashtag, td as postWebapiv2FeedV6TopToProfile, Pd as postWebapiv2FileV1DocumentConvert, xd as postWebapiv2ForumManagementV1DelGroupUser, Hd as postWebapiv2ForumManagementV1DelSilence, Rd as postWebapiv2ForumManagementV1GameGuideEntityCreate, Yd as postWebapiv2ForumManagementV1GameGuideEntityMomentCreate, Nd as postWebapiv2ForumManagementV1GameGuideEntityMomentDelete, Qd as postWebapiv2ForumManagementV1GameGuideEntityMomentsWeightUpdate, Xd as postWebapiv2ForumManagementV1GameGuideEntityUpdate, qd as postWebapiv2ForumManagementV1GameGuidePreview, Md as postWebapiv2ForumManagementV1GameGuideSave, pb as postWebapiv2ForumManagementV1GroupLabelDelete, rb as postWebapiv2ForumManagementV1GroupLabelSave, ib as postWebapiv2ForumManagementV1GroupLabelSetOffline, vb as postWebapiv2ForumManagementV1GroupRecommendDelete, mb as postWebapiv2ForumManagementV1GroupRecommendSave, ub as postWebapiv2ForumManagementV1MultiDel, fb as postWebapiv2ForumManagementV1MultiDown, wb as postWebapiv2ForumManagementV1MultiFeedbackStatus, jb as postWebapiv2ForumManagementV1MultiMove, Eb as postWebapiv2ForumManagementV1MultiUnlinkGroup, Ub as postWebapiv2ForumManagementV1QuestionAgreementList, Ob as postWebapiv2ForumManagementV1QuestionBatchPolishReply, Pb as postWebapiv2ForumManagementV1QuestionCheckAgreement, kb as postWebapiv2ForumManagementV1QuestionCreatePromptTemplate, Sb as postWebapiv2ForumManagementV1QuestionDeletePromptTemplate, Lb as postWebapiv2ForumManagementV1QuestionGetPolishProgress, Ab as postWebapiv2ForumManagementV1QuestionGetPromptTemplateList, Fb as postWebapiv2ForumManagementV1QuestionGetSelectedReplyText, Bb as postWebapiv2ForumManagementV1QuestionReplyCommit, _b as postWebapiv2ForumManagementV1QuestionReplyGenerate, xb as postWebapiv2ForumManagementV1QuestionReplyPreview, Hb as postWebapiv2ForumManagementV1QuestionSaveEditedAnswer, zb as postWebapiv2ForumManagementV1QuestionSignAgreement, Jb as postWebapiv2ForumManagementV1QuestionSignOssToken, Rb as postWebapiv2ForumManagementV1QuestionUpdateAggQuestionNoNeedReply, $b as postWebapiv2ForumManagementV1QuestionUpdateMomentBatchNoNeedReply, Kb as postWebapiv2ForumManagementV1QuestionUpdatePromptTemplate, Yb as postWebapiv2ForumManagementV1QuestionUpdateSupplementText, Nb as postWebapiv2ForumManagementV1QuestionUploadOssFileRecord, Qb as postWebapiv2ForumManagementV1QuestionValidateOperation, Xb as postWebapiv2ForumManagementV1QuestionViewSupplementStatus, Zb as postWebapiv2ForumManagementV1SaveGroupUser, qb as postWebapiv2ForumManagementV1SetApplyStatus, Mb as postWebapiv2ForumManagementV1SetGroupUserApply, tc as postWebapiv2ForumManagementV1UnDown, mc as postWebapiv2FriendV1SetAlias, hc as postWebapiv2FriendshipV1Create, lc as postWebapiv2FriendshipV1Delete, Wc as postWebapiv2FriendshipV1HoverboardGameInvite, Uc as postWebapiv2GachaRecordV1UploadData, Pc as postWebapiv2GameGuideV1ComplaintUpload, Rc as postWebapiv2GameRecordV1BindLivelinkStatus, $c as postWebapiv2GameRecordV1BindRole, Yc as postWebapiv2GameRecordV1BindTokenlinkStatus, ah as postWebapiv2GameRecordV1GachaRecordRefresh, vh as postWebapiv2GameRecordV1Impressions, mh as postWebapiv2GameRecordV1LoginByVerificationCode, bh as postWebapiv2GameRecordV1Refresh, hh as postWebapiv2GameRecordV1SaveDisplayAlbumData, lh as postWebapiv2GameRecordV1SendVerificationCode, Eh as postWebapiv2GameToolV1CommonToolsPinned, Oh as postWebapiv2GameToolV1ReportTool, Ch as postWebapiv2GeneralVoteV1Vote, Bh as postWebapiv2GroupHonorV1Save, Jh as postWebapiv2GroupSilenceV1Create, Rh as postWebapiv2GroupSilenceV1Delete, Kh as postWebapiv2GroupV1AddUserVisit, Qh as postWebapiv2GroupV1EditTeamCard, m1 as postWebapiv2HashtagV1Create, V1 as postWebapiv2HashtagV1JoinCircleHashtag, W1 as postWebapiv2HistoryV1CreateWithUser, j1 as postWebapiv2HistoryV1DeleteWithUser, G1 as postWebapiv2HokV1CreateLuckyCode, U1 as postWebapiv2HokV1CreatePasswordCode, O1 as postWebapiv2HokV1FollowUser, x1 as postWebapiv2HokV1MarkLuckyCodeInvalid, H1 as postWebapiv2HokV1MarkPasswordCodeInvalid, R1 as postWebapiv2HokV1SendMatchChat, $1 as postWebapiv2HokV1UpdateUserInfo, K1 as postWebapiv2HokV1UserEvent, sl as postWebapiv2IAppV1ActionItem, Vl as postWebapiv2ICommunityCenterV1ChangeTopPostSort, Tl as postWebapiv2ICommunityCenterV1CreateAdmin, gl as postWebapiv2ICommunityCenterV1CreateSidebar, ul as postWebapiv2ICommunityCenterV1DeleteAdmin, fl as postWebapiv2ICommunityCenterV1DeleteSidebar, wl as postWebapiv2ICommunityCenterV1EditHashtagTop, yl as postWebapiv2ICommunityCenterV1EditSidebar, Gl as postWebapiv2ICommunityCenterV1SetHashtagTop, Ul as postWebapiv2ICommunityCenterV1SetTopPost, Pl as postWebapiv2ICommunityCenterV1UnsetHashtagTop, kl as postWebapiv2ICommunityCenterV1UnsetTopPost, Sl as postWebapiv2ICommunityCenterV1UpdateTopPost, _l as postWebapiv2IExplorerNominationV1Vote, pV as postWebapiv2IInterestV1SetAppTags, sV as postWebapiv2IInterestV1SetGamerRole, rV as postWebapiv2IInterestV1SetRecList, mV as postWebapiv2IPlayfestV1FinishShareTask, cV as postWebapiv2IPlayfestV1Invited, TV as postWebapiv2IPlayfestV1TrialPlaySubmit, gV as postWebapiv2IPlayfestV1Vote, uV as postWebapiv2IPostGamelistV1MakeCover, wV as postWebapiv2IReleaseLiveV1Subscribe, jV as postWebapiv2ISearchV2HistoryClear, UV as postWebapiv2ISearchV2HistorySync, zV as postWebapiv2IUserAppStatusV1PublishSave, JV as postWebapiv2IUserAppStatusV1Save, KV as postWebapiv2InAppEventV1CancelGiftCodePreselectRole, YV as postWebapiv2InAppEventV1DeleteReserve, QV as postWebapiv2InAppEventV1IsCurrent, ZV as postWebapiv2InAppEventV1Reserve, qV as postWebapiv2InAppEventV1SetGiftCodePreselectRole, r2 as postWebapiv2LeaderboardV1SaveVote, c2 as postWebapiv2LiveEventRedPacketV1JoinLuckyDraw, l2 as postWebapiv2LiveEventV1AddComment, T2 as postWebapiv2LiveEventV1BlockUser, W2 as postWebapiv2LiveEventV1DeleteComment, O2 as postWebapiv2LiveEventV1MuteUser, P2 as postWebapiv2LiveEventV1Online, F2 as postWebapiv2LiveEventV1ReceiveRedPack, C2 as postWebapiv2LiveEventV1SavePrizeAddress, D2 as postWebapiv2LiveEventV1SaveSensitiveWord, I2 as postWebapiv2LiveEventV1Subscribe, x2 as postWebapiv2LiveEventV1Unsubscribe, J2 as postWebapiv2MapPointV1Delete, Y2 as postWebapiv2MapPointV1Save, N2 as postWebapiv2MapPointV1UpdateStatus, Q2 as postWebapiv2MapUserV1Delete, Z2 as postWebapiv2MapUserV1Save, oT as postWebapiv2McpV1CurrentAppReviewsLike, pT as postWebapiv2McpV1CurrentAppReviewsReply, nT as postWebapiv2MessageV1ClearThreadUnread, mT as postWebapiv2MessageV1Delete, dT as postWebapiv2MessageV1DeleteByParticipant, VT as postWebapiv2MessageV1SayHi, TT as postWebapiv2MessageV1SayHiAccept, gT as postWebapiv2MessageV1Send, uT as postWebapiv2MessageV1Share, UT as postWebapiv2MomentCommentV1CloseComment, OT as postWebapiv2MomentCommentV1Create, PT as postWebapiv2MomentCommentV1CreateChild, kT as postWebapiv2MomentCommentV1Delete, ST as postWebapiv2MomentCommentV1Hidden, LT as postWebapiv2MomentCommentV1MarkHelpful, AT as postWebapiv2MomentCommentV1OpenComment, CT as postWebapiv2MomentCommentV1SetShowSensitiveWords, DT as postWebapiv2MomentCommentV1Top, BT as postWebapiv2MomentCommentV1UnHidden, IT as postWebapiv2MomentCommentV1UnSetShowSensitiveWords, _T as postWebapiv2MomentCommentV1UnTop, xT as postWebapiv2MomentCommentV1Update, zT as postWebapiv2MomentDraftV1CreateTopic, JT as postWebapiv2MomentDraftV1DeleteTopic, $T as postWebapiv2MomentDraftV1PublishTopic, KT as postWebapiv2MomentDraftV1UpdateTopic, qT as postWebapiv2MomentGameDemoV1Record, eg as postWebapiv2MomentV1RecordGuideStatus, tg as postWebapiv2MomentV1SetNoti, og as postWebapiv2MomentV2ApplyTreasure, rg as postWebapiv2MomentV2Repost, ng as postWebapiv2MomentV3ApplyTreasure, mg as postWebapiv2MomentV3CancelPublish, dg as postWebapiv2MomentV3CloseComment, bg as postWebapiv2MomentV3Contribute, cg as postWebapiv2MomentV3CreateTopic, hg as postWebapiv2MomentV3Delete, Vg as postWebapiv2MomentV3Down, Tg as postWebapiv2MomentV3Elite, jg as postWebapiv2MomentV3GrantMakerCredit, Eg as postWebapiv2MomentV3GroupLabelTop, Gg as postWebapiv2MomentV3Hidden, Ug as postWebapiv2MomentV3ManageFeedback, Og as postWebapiv2MomentV3MultiMoveLabel, Pg as postWebapiv2MomentV3Official, kg as postWebapiv2MomentV3OpenComment, Sg as postWebapiv2MomentV3PostRecognized, Lg as postWebapiv2MomentV3PublishTime, Ag as postWebapiv2MomentV3SetShowSensitiveWords, Fg as postWebapiv2MomentV3Top, Cg as postWebapiv2MomentV3Treasure, Dg as postWebapiv2MomentV3UnDelete, Bg as postWebapiv2MomentV3UnDown, Ig as postWebapiv2MomentV3UnElite, _g as postWebapiv2MomentV3UnGroupLabelTop, xg as postWebapiv2MomentV3UnHidden, Hg as postWebapiv2MomentV3UnOfficial, zg as postWebapiv2MomentV3UnPostRecognized, Jg as postWebapiv2MomentV3UnSetShowSensitiveWords, Rg as postWebapiv2MomentV3UnTop, $g as postWebapiv2MomentV3UnTreasure, Kg as postWebapiv2MomentV3UnlinkGroup, Yg as postWebapiv2MomentV3UpdateTopic, vu as postWebapiv2NotificationV1Delete, nu as postWebapiv2NotificationV1DeleteBySender, mu as postWebapiv2NotificationV1DeleteInboxBySender, du as postWebapiv2NotificationV1GenerateRecentSummary, bu as postWebapiv2NotificationV1GetBifrostToken, lu as postWebapiv2NotificationV1MarkRead, Vu as postWebapiv2NotificationV1MarkReadAll, Tu as postWebapiv2NotificationV1SetInboxPinned, gu as postWebapiv2NotificationV1SetNoticeVars, Gu as postWebapiv2OfflineEventsV1Card, Uu as postWebapiv2OrderV1BundleByMe, Pu as postWebapiv2OrderV1ByMe, ku as postWebapiv2OrderV1ByPaymentId, Su as postWebapiv2OrderV1Cancel, Lu as postWebapiv2OrderV1ConfirmReceipt, Au as postWebapiv2OrderV1Delete, xu as postWebapiv2OrderV1OneClickPay, Hu as postWebapiv2OrderV1PaymentNotify, zu as postWebapiv2OrderV1RedeemCodeByMe, Ju as postWebapiv2OrderV1Refund, Ru as postWebapiv2OrderV1RefundCancel, Qu as postWebapiv2OrderV1SaveRefundApply, Xu as postWebapiv2OrderV1StockByMe, Zu as postWebapiv2OrderV1SubmitRefundLogistic, Mu as postWebapiv2OrderV1UpdateDeliveryAddress, af as postWebapiv2PandoraV1FuseAppRole, of as postWebapiv2PaymentCheckoutV1Authorize, pf as postWebapiv2PaymentCheckoutV1Cancel, vf as postWebapiv2PaymentCheckoutV1Pay, nf as postWebapiv2PaymentCheckoutV1Payments, bf as postWebapiv2PaymentOrderV1ConfirmOrder, cf as postWebapiv2PaymentOrderV1CreateOrder, hf as postWebapiv2PaymentOrderV1DeletePaymentMethod, yf as postWebapiv2PaymentOrderV1PayOrder, Wf as postWebapiv2PaymentOrderV1QrpayQrcode, jf as postWebapiv2PaymentOrderV1QrpayQrcodeWithStock, Gf as postWebapiv2PaymentOrderV1RefundApply, Uf as postWebapiv2PaymentOrderV1RefundCancel, Pf as postWebapiv2PaymentOrderV1UpdateRegion, kf as postWebapiv2PaymentOrderV2DeletePaymentMethod, Df as postWebapiv2PaymentV1SettingsCardDelete, $f as postWebapiv2PcPackageV1Detail, Nf as postWebapiv2PendingReviewV1CloseOverview, Qf as postWebapiv2PendingReviewV1DeleteApp, tw as postWebapiv2PresentDeleteReserve, ow as postWebapiv2PresentLottery, sw as postWebapiv2PresentReserve, rw as postWebapiv2PresentReserveAppRecord, iw as postWebapiv2PresentSharePage, vw as postWebapiv2PresentUseAllSpecialPrize, yw as postWebapiv2RecentVisitV1Add, jw as postWebapiv2RecentVisitV1Delete, Ew as postWebapiv2RecentVisitV1SetSticky, kw as postWebapiv2ReserveV1Create, Sw as postWebapiv2ReserveV1Delete, Lw as postWebapiv2ReserveV1MultiCreate, Fw as postWebapiv2ReviewCommentV1Create, Cw as postWebapiv2ReviewCommentV1Delete, Dw as postWebapiv2ReviewCommentV1Hidden, Bw as postWebapiv2ReviewCommentV1SetShowSensitiveWords, Iw as postWebapiv2ReviewCommentV1UnHidden, _w as postWebapiv2ReviewCommentV1UnsetShowSensitiveWords, xw as postWebapiv2ReviewCommentV1Update, zw as postWebapiv2ReviewDraftV1Create, Jw as postWebapiv2ReviewDraftV1Delete, $w as postWebapiv2ReviewDraftV1Publish, Kw as postWebapiv2ReviewDraftV1Update, Yw as postWebapiv2ReviewDraftV3Publish, Qw as postWebapiv2ReviewV1AdminCollapse, Zw as postWebapiv2ReviewV1AiSummaryFeedback, Mw as postWebapiv2ReviewV1CloseComment, ty as postWebapiv2ReviewV1Delete, oy as postWebapiv2ReviewV1Hidden, iy as postWebapiv2ReviewV1OpenComment, ny as postWebapiv2ReviewV1SetShowSensitiveWords, by as postWebapiv2ReviewV1UnHidden, cy as postWebapiv2ReviewV1UnsetShowSensitiveWords, Ey as postWebapiv2ReviewV3CloseComment, Gy as postWebapiv2ReviewV3Create, Uy as postWebapiv2ReviewV3OpenComment, Oy as postWebapiv2ReviewV3Update, Sy as postWebapiv2SearchHistoryV1Clear, Ly as postWebapiv2SearchHistoryV1Sync, Ny as postWebapiv2SearchV6AggSearch, Qy as postWebapiv2SendFileV1ImageUploadReport, Xy as postWebapiv2SendFileV1ImageUploadToken, qy as postWebapiv2SendFileV1UploadImageByUrl, My as postWebapiv2ShareV1CreateShareCommand, pW as postWebapiv2SignupV1Apply, rW as postWebapiv2SignupV1Cancel, iW as postWebapiv2SignupV1Delete, cW as postWebapiv2SignupV1Remove, hW as postWebapiv2SignupV1Review, VW as postWebapiv2SteamV1AddToWishlist, fW as postWebapiv2SteamV1RedeemCdk, wW as postWebapiv2SteamV1RemoveFromWishlist, WW as postWebapiv2SteamV1SyncData, SW as postWebapiv2SummerActivityV1DrawLottery, FW as postWebapiv2SummerActivityV1InvitationHelp, xW as postWebapiv2SurveyV1CreateAnswerSession, zW as postWebapiv2SurveyV1SaveDraftAnswer, JW as postWebapiv2SurveyV1SubmitAnswer, RW as postWebapiv2TagV1Save, KW as postWebapiv2ThirdPartyToolDevV1Agree, YW as postWebapiv2ThirdPartyToolDevV1AppAllowList, NW as postWebapiv2ThirdPartyToolDevV1CompleteUploadPackage, QW as postWebapiv2ThirdPartyToolDevV1Create, XW as postWebapiv2ThirdPartyToolDevV1CreateDraft, ZW as postWebapiv2ThirdPartyToolDevV1CreatePackage, qW as postWebapiv2ThirdPartyToolDevV1CreatePackageFromGithub, MW as postWebapiv2ThirdPartyToolDevV1CreateVersion, sj as postWebapiv2ThirdPartyToolDevV1Permission, dj as postWebapiv2TopicLotteryV1Address, bj as postWebapiv2TopicLotteryV1ExportUsers, cj as postWebapiv2TopicLotteryV1GetConditions, wj as postWebapiv2UgAiEvaluateV1GenUserGameSummary, Wj as postWebapiv2UgAiTemplateGenerate, jj as postWebapiv2UgAiTemplatePreSign, Pj as postWebapiv2UgRocoV1DeleteCards, kj as postWebapiv2UgRocoV1DeleteRocoTeam, Aj as postWebapiv2UgRocoV1FavRocoTeam, _j as postWebapiv2UgRocoV1LikeRocoTeam, xj as postWebapiv2UgRocoV1PostCards, Hj as postWebapiv2UgRocoV1PostRocoTeam, Kj as postWebapiv2UgSkyV1Block, Yj as postWebapiv2UgSkyV1BonfireStart, Qj as postWebapiv2UgSkyV1BonfireStop, Zj as postWebapiv2UgSkyV1Illuminate, Mj as postWebapiv2UgSkyV1ProfileUpdate, tE as postWebapiv2UgSkyV1Report, aE as postWebapiv2UgSusuperV1CreateMatchComment, oE as postWebapiv2UgSusuperV1CreatePlayerComment, vE as postWebapiv2UgSusuperV1LikeComment, hE as postWebapiv2UgSusuperV1VoteMatch, lE as postWebapiv2UgccollectionV1AddMoments, VE as postWebapiv2UgccollectionV1Create, TE as postWebapiv2UgccollectionV1Delete, yE as postWebapiv2UgccollectionV1RemoveMoments, WE as postWebapiv2UgccollectionV1ReorderMoments, jE as postWebapiv2UgccollectionV1Update, OE as postWebapiv2UserAnnualDataV1GetBadge2022, LE as postWebapiv2UserAppV1Delete, AE as postWebapiv2UserAppV1Mark, RE as postWebapiv2UserBadgeV1CancelWear, XE as postWebapiv2UserBadgeV1Wear, qE as postWebapiv2UserProfileUserProfileV1Store, eG as postWebapiv2UserProfileV1MultiGet, pG as postWebapiv2UserSettingsV1Store, sG as postWebapiv2UserSettingsV1WechatBindServe, iG as postWebapiv2UserSettingsV1WechatSubCode, vG as postWebapiv2UserSettingsV1WechatSyncFromSocial, nG as postWebapiv2UserSettingsV1WechatUnbindServe, mG as postWebapiv2UserVerifyV1ApplyGroupModerator, dG as postWebapiv2UserVerifyV1ApplyMedia, bG as postWebapiv2UserVerifyV1ApplyPro, gG as postWebapiv2VideoResourceV1Create, wG as postWebapiv2VideoResourceV1UploadToken, OG as postWebapiv2VoteV1ClearInvalid, SG as postWebapiv2VoteV2Save, AG as postWebapiv2WalletV1CloseTopUp, CG as postWebapiv2WalletV1TopUp, BG as postWebapiv2WalletV1TopUpQrcode, HG as postWebapiv2WechatV1Config};
