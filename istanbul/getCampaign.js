#!vm;utf-8
$response.setHeader("Cache-Control", "max-age=20")
#set($campaign = $request.getParameter('campaign'))
#set($callback = "$!request.getParameter('callback')")
#if($callback != "")
${callback}(
#end
#parse("campaign/$!{campaign}.vm")
#if($callback != "")
)
#end